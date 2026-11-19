import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

/* ------------------------------------------------------------------ */
/* Memory grid geometry (SVG user units)                               */
/* ------------------------------------------------------------------ */
const COLS = 4;
const ROWS = 4;
const CELL_W = 84;
const CELL_H = 58;
const GAP = 12;
const PAD = 16;
const HEADER = 30;
const VB_W = PAD * 2 + COLS * CELL_W + (COLS - 1) * GAP; // 404
const VB_H = HEADER + PAD + ROWS * CELL_H + (ROWS - 1) * GAP; // 314

const BASE_ADDR = 0x1f40;
const addrOf = (cell) =>
  "0x" + (BASE_ADDR + cell * 8).toString(16).toUpperCase();

const cellBox = (cell) => {
  const col = cell % COLS;
  const row = Math.floor(cell / COLS);
  const x = PAD + col * (CELL_W + GAP);
  const y = HEADER + row * (CELL_H + GAP);
  return { x, y, cx: x + CELL_W / 2, cy: y + CELL_H / 2 };
};

const BLUE = "#58a6ff";
const GREEN = "#00ff88";

// Linked list scattered across the heap (non-contiguous, like a real one)
const NODES = [
  { cell: 0, value: "idea" },
  { cell: 6, value: "design" },
  { cell: 8, value: "logic" },
  { cell: 15, value: "code" },
];
const NODE_INDEX = Object.fromEntries(NODES.map((n, i) => [n.cell, i]));

// Point where the ray from a cell's center toward (tx, ty) leaves the cell
const edgePoint = (box, tx, ty, pad) => {
  const dx = tx - box.cx;
  const dy = ty - box.cy;
  const hw = CELL_W / 2 + pad;
  const hh = CELL_H / 2 + pad;
  const t = Math.min(
    dx ? hw / Math.abs(dx) : Infinity,
    dy ? hh / Math.abs(dy) : Infinity
  );
  return { x: box.cx + dx * t, y: box.cy + dy * t };
};

const LINKS = NODES.slice(1).map((to, i) => {
  const a = cellBox(NODES[i].cell);
  const b = cellBox(to.cell);
  const p = edgePoint(a, b.cx, b.cy, 2);
  const q = edgePoint(b, a.cx, a.cy, 3);
  const bend = 0.15;
  const cx = (p.x + q.x) / 2 - (q.y - p.y) * bend;
  const cy = (p.y + q.y) / 2 + (q.x - p.x) * bend;
  return {
    d: `M ${p.x} ${p.y} Q ${cx} ${cy} ${q.x} ${q.y}`,
    ex: q.x,
    ey: q.y,
    angle: (Math.atan2(q.y - cy, q.x - cx) * 180) / Math.PI,
  };
});

const randomByte = () =>
  Math.floor(Math.random() * 256)
    .toString(16)
    .toUpperCase()
    .padStart(2, "0");
const randomWord = () => `${randomByte()} ${randomByte()}`;

/* ------------------------------------------------------------------ */
/* Intro code (typed in the editor; each `new Node` allocates a cell)  */
/* ------------------------------------------------------------------ */
const TOK = {
  kw: "#ff7b72",
  type: "#d2a8ff",
  str: "#a5d6ff",
  plain: "#c9d1d9",
  com: "#6e7681",
};

const nodeLine = (value) => [
  ["n = n->next = ", "plain"],
  ["new", "kw"],
  [" Node(", "plain"],
  [`"${value}"`, "str"],
  [");", "plain"],
];

const CODE = [
  {
    tokens: [
      ["Node*", "type"],
      [" ideas = ", "plain"],
      ["new", "kw"],
      [" Node(", "plain"],
      ['"idea"', "str"],
      [");", "plain"],
    ],
    alloc: 0,
  },
  { tokens: [["Node*", "type"], [" n = ideas;", "plain"]] },
  { tokens: nodeLine("design"), alloc: 1 },
  { tokens: nodeLine("logic"), alloc: 2 },
  { tokens: nodeLine("code"), alloc: 3 },
];

const CHAR_MS = 20;
const lineLength = (line) => line.tokens.reduce((s, [t]) => s + t.length, 0);

const CodeLine = ({ line, index, showCursor }) => {
  const total = lineLength(line);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= total) return;
    const id = setTimeout(() => setCount((c) => c + 1), CHAR_MS);
    return () => clearTimeout(id);
  }, [count, total]);

  let remaining = count;
  const rendered = line.tokens.map(([text, kind], i) => {
    const part = text.slice(0, Math.max(0, remaining));
    remaining -= text.length;
    return part ? (
      <span key={i} style={{ color: TOK[kind] }}>
        {part}
      </span>
    ) : null;
  });

  const done = count >= total;

  return (
    <div className="flex whitespace-pre">
      <span className="w-6 shrink-0 pr-3 text-right text-gray-600 select-none">
        {index + 1}
      </span>
      <span>
        {rendered}
        {done && line.alloc !== undefined && (
          <motion.span
            className="hidden sm:inline"
            style={{ color: TOK.com }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {"  // "}
            {addrOf(NODES[line.alloc].cell)}
          </motion.span>
        )}
        {showCursor && (
          <motion.span
            className="text-green-400"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            ▍
          </motion.span>
        )}
      </span>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Hero visual                                                         */
/* ------------------------------------------------------------------ */
const MemoryHero = ({ onReady }) => {
  const reduce = useReducedMotion();
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [lines, setLines] = useState(0);
  const [allocated, setAllocated] = useState(0);
  const [phase, setPhase] = useState("alloc"); // "alloc" -> "ready"
  const [pointer, setPointer] = useState(false);
  const [curr, setCurr] = useState(-1);
  const [junk, setJunk] = useState(() =>
    Array.from({ length: COLS * ROWS }, randomWord)
  );
  const [geo, setGeo] = useState(null);

  const containerRef = useRef(null);
  const srcRef = useRef(null);
  const svgRef = useRef(null);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  // Timeline: type code -> allocate nodes -> headline -> pointer -> traverse
  useEffect(() => {
    if (reduce) {
      setLines(CODE.length);
      setAllocated(NODES.length);
      setPhase("ready");
      setPointer(true);
      onReadyRef.current?.();
      return;
    }

    const timers = [];
    const at = (ms, fn) => timers.push(setTimeout(fn, ms));

    let t = 500;
    CODE.forEach((line, i) => {
      at(t, () => setLines(i + 1));
      t += lineLength(line) * CHAR_MS + 120;
      if (line.alloc !== undefined) {
        const n = line.alloc + 1;
        at(t, () => setAllocated(n));
        t += 500;
      } else {
        t += 150;
      }
    });
    t += 700;
    at(t, () => setPhase("ready"));
    t += 900;
    at(t, () => setPointer(true));
    t += 900;
    at(t, () => {
      setCurr(0);
      onReadyRef.current?.();
    });

    return () => timers.forEach(clearTimeout);
  }, [reduce]);

  // Traverse the list: curr = curr->next, wrapping back to the head
  useEffect(() => {
    if (curr < 0) return;
    const last = curr === NODES.length - 1;
    const id = setTimeout(
      () => setCurr((c) => (c + 1) % NODES.length),
      last ? 1800 : 1000
    );
    return () => clearTimeout(id);
  }, [curr]);

  // Garbage bytes flicker in unallocated memory
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setJunk((j) => {
        const next = [...j];
        next[Math.floor(Math.random() * next.length)] = randomWord();
        return next;
      });
    }, 450);
    return () => clearInterval(id);
  }, [reduce]);

  // Pointer arrow from the `ideas` variable to the head node
  const measure = useCallback(() => {
    const c = containerRef.current;
    const s = srcRef.current;
    const svg = svgRef.current;
    if (!c || !s || !svg) return;

    const cr = c.getBoundingClientRect();
    const sr = s.getBoundingClientRect();
    const vr = svg.getBoundingClientRect();
    const k = vr.width / VB_W;
    const head = cellBox(NODES[0].cell);
    const px = (x) => vr.left - cr.left + x * k;
    const py = (y) => vr.top - cr.top + y * k;

    if (isDesktop) {
      const sx = sr.right - cr.left + 12;
      const sy = sr.top - cr.top + sr.height / 2;
      const tx = px(head.x) - 4;
      const ty = py(head.cy);
      const dx = tx - sx;
      setGeo({
        sx,
        sy,
        tx,
        ty,
        angle: 0,
        d: `M ${sx} ${sy} C ${sx + dx * 0.55} ${sy}, ${tx - dx * 0.55} ${ty}, ${tx} ${ty}`,
      });
    } else {
      const sx = sr.left - cr.left + sr.width / 2;
      const sy = sr.bottom - cr.top + 10;
      const tx = px(head.cx);
      const ty = py(head.y) - 4;
      const dy = ty - sy;
      setGeo({
        sx,
        sy,
        tx,
        ty,
        angle: 90,
        d: `M ${sx} ${sy} C ${sx} ${sy + dy * 0.55}, ${tx} ${ty - dy * 0.55}, ${tx} ${ty}`,
      });
    }
  }, [isDesktop]);

  const setSrc = useCallback(
    (node) => {
      srcRef.current = node;
      if (node) requestAnimationFrame(measure);
    },
    [measure]
  );

  useLayoutEffect(() => {
    if (pointer) measure();
  }, [pointer, measure]);

  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(c);
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const lastNode = NODES.length - 1;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto c-space flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-16"
    >
      {/* ---------- Left: editor, then headline ---------- */}
      <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start justify-center min-h-[190px] sm:min-h-[210px] text-center lg:text-left">
        <AnimatePresence mode="wait">
          {phase === "alloc" ? (
            <motion.div
              key="editor"
              className="w-full max-w-[420px] rounded-lg border border-gray-700 bg-[#0d1117cc] p-3 text-left shadow-[0_0_15px_rgba(0,255,136,0.12)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="ml-1 text-[10px] text-gray-400 font-mono">
                  ideas.cpp
                </span>
              </div>
              <div className="font-mono text-[11px] sm:text-[13px] leading-6 min-h-[120px]">
                {CODE.slice(0, lines).map((line, i) => (
                  <CodeLine
                    key={i}
                    line={line}
                    index={i}
                    showCursor={i === lines - 1}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="headline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight text-gray-100 font-generalsans">
                I turn <span style={{ color: BLUE }}>ideas</span>
                <br />
                into{" "}
                <motion.span
                  className="text-green-400 font-mono"
                  animate={{
                    textShadow:
                      curr === lastNode
                        ? "0 0 24px #00ff88"
                        : [
                            "0 0 10px #00ff88",
                            "0 0 18px #00ff88",
                            "0 0 10px #00ff88",
                          ],
                  }}
                  transition={
                    curr === lastNode
                      ? { duration: 0.3 }
                      : { repeat: Infinity, duration: 2 }
                  }
                >
                  code<span className="animate-pulse">|</span>
                </motion.span>
              </h1>
              <p className="mt-6 font-mono text-xs sm:text-sm">
                <span
                  ref={setSrc}
                  className="inline-block rounded-md border border-gray-700 bg-[#0d1117cc] px-3 py-1.5 text-[#c9d1d9]"
                >
                  <span style={{ color: TOK.type }}>Node*</span> ideas ={" "}
                  <span className="text-code-muted">(</span>
                  <span style={{ color: TOK.type }}>Node*</span>
                  <span className="text-code-muted">)</span>
                  <span style={{ color: GREEN }}>{addrOf(NODES[0].cell)}</span>;
                </span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ---------- Right: heap memory ---------- */}
      <motion.div
        className="w-full max-w-[420px] shrink-0 rounded-xl border border-gray-700 bg-[#0d1117cc] shadow-[0_0_24px_rgba(0,255,136,0.08)]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <svg
          ref={svgRef}
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="block w-full h-auto font-mono"
          role="img"
          aria-label="Heap memory holding a linked list: idea → design → logic → code → NULL"
        >
          <text
            x={VB_W - PAD}
            y={20}
            textAnchor="end"
            fontSize={9}
            fill="#6e7681"
          >
            {`// heap  ${addrOf(0)} – ${addrOf(COLS * ROWS - 1)}`}
          </text>

          {Array.from({ length: COLS * ROWS }, (_, cell) => {
            const b = cellBox(cell);
            const idx = NODE_INDEX[cell];
            const isNode = idx !== undefined && idx < allocated;
            const isCurr = isNode && curr === idx;
            const next =
              idx !== undefined && idx < lastNode
                ? addrOf(NODES[idx + 1].cell)
                : "NULL";

            return (
              <g key={cell}>
                <motion.rect
                  x={b.x}
                  y={b.y}
                  width={CELL_W}
                  height={CELL_H}
                  rx={8}
                  strokeWidth={isNode ? 1.5 : 1}
                  initial={false}
                  animate={{
                    fill: isCurr
                      ? "rgba(0,255,136,0.10)"
                      : isNode
                      ? "rgba(88,166,255,0.08)"
                      : "rgba(22,27,34,0.6)",
                    stroke: isCurr ? GREEN : isNode ? BLUE : "#30363d",
                  }}
                  transition={{ duration: 0.35 }}
                  style={
                    isCurr
                      ? { filter: "drop-shadow(0 0 6px rgba(0,255,136,0.55))" }
                      : undefined
                  }
                />
                <text
                  x={b.x + 7}
                  y={b.y + 13}
                  fontSize={8.5}
                  fill={isNode ? "#8b949e" : "#484f58"}
                >
                  {addrOf(cell)}
                </text>

                {isNode ? (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35, delay: idx === 0 ? 0 : 0.3 }}
                  >
                    {/* allocation ping */}
                    <motion.rect
                      x={b.x}
                      y={b.y}
                      width={CELL_W}
                      height={CELL_H}
                      rx={8}
                      fill="none"
                      stroke={BLUE}
                      initial={{ opacity: 0.9, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.3 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      style={{
                        transformBox: "fill-box",
                        transformOrigin: "center",
                      }}
                    />
                    <text
                      x={b.cx}
                      y={b.y + 33}
                      textAnchor="middle"
                      fontSize={14}
                      fontWeight={600}
                      fill={idx === lastNode ? GREEN : "#e6edf3"}
                    >
                      {NODES[idx].value}
                    </text>
                    <line
                      x1={b.x + 8}
                      x2={b.x + CELL_W - 8}
                      y1={b.y + 40}
                      y2={b.y + 40}
                      stroke="#30363d"
                    />
                    <text
                      x={b.cx}
                      y={b.y + 51}
                      textAnchor="middle"
                      fontSize={8.5}
                      fill="#8b949e"
                    >
                      {`next ${next}`}
                    </text>
                  </motion.g>
                ) : (
                  <text
                    x={b.cx}
                    y={b.y + 37}
                    textAnchor="middle"
                    fontSize={11}
                    fill="#3d444d"
                  >
                    {junk[cell]}
                  </text>
                )}

                {isCurr && (
                  <text
                    x={b.x + CELL_W - 7}
                    y={b.y + 13}
                    textAnchor="end"
                    fontSize={8}
                    fill={GREEN}
                  >
                    curr
                  </text>
                )}
              </g>
            );
          })}

          {/* next pointers */}
          {LINKS.map((L, i) => {
            if (allocated <= i + 1) return null;
            const color = curr === i + 1 ? GREEN : BLUE;
            return (
              <g key={i}>
                <motion.path
                  d={L.d}
                  fill="none"
                  strokeWidth={1.5}
                  initial={{ pathLength: 0, stroke: BLUE }}
                  animate={{ pathLength: 1, stroke: color }}
                  transition={{
                    pathLength: { duration: 0.45, ease: "easeInOut" },
                    stroke: { duration: 0.3 },
                  }}
                />
                <g transform={`translate(${L.ex} ${L.ey}) rotate(${L.angle})`}>
                  <motion.path
                    d="M -7 -4 L 0 0 L -7 4 z"
                    initial={{ opacity: 0, fill: BLUE }}
                    animate={{ opacity: 1, fill: color }}
                    transition={{
                      opacity: { delay: 0.4, duration: 0.15 },
                      fill: { duration: 0.3 },
                    }}
                  />
                </g>
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* ---------- Pointer: ideas -> head node ---------- */}
      <svg
        className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10"
        aria-hidden="true"
      >
        {pointer && geo && (
          <g style={{ filter: "drop-shadow(0 0 4px rgba(0,255,136,0.6))" }}>
            <motion.circle
              cx={geo.sx}
              cy={geo.sy}
              r={4}
              fill={GREEN}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.path
              d={geo.d}
              fill="none"
              stroke={GREEN}
              strokeWidth={1.75}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <g transform={`translate(${geo.tx} ${geo.ty}) rotate(${geo.angle})`}>
              <motion.path
                d="M -10 -5.5 L 0 0 L -10 5.5 z"
                fill={GREEN}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.15 }}
              />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};

export default MemoryHero;
