import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const words = ["I", "turn", "ideas", "into", "code"];

const StackAnimation = ({ onComplete }) => {
  const hasRun = useRef(false);
  const [stack, setStack] = useState([]);
  const [operations, setOperations] = useState([]);
  const [showTerminal, setShowTerminal] = useState(true);
  const [showTyping, setShowTyping] = useState(true);
  const [typedCode, setTypedCode] = useState("");
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const introLines = [
      "const stack = [];",
      "function push(x) { stack.push(x); }",
      "function pop() { return stack.pop(); }",
    ];

    let delay = 0;
    introLines.forEach((line) => {
      setTimeout(() => setTypedCode((p) => p + `\n> ${line}`), delay);
      delay += 700;
    });

    setTimeout(() => {
      setShowTyping(false);
      runStackAnimation();
    }, delay + 500);
  }, []);

  // Stack simulation
  const runStackAnimation = () => {
    let delay = 0;
    words.forEach((word, i) => {
      // PUSH
      setTimeout(() => {
        setOperations((p) => [...p, `stack.push("${word}")`]);
        setStack((p) => [...p, word]);
        createParticles();
      }, delay);
      delay += 500;

      // POP
      setTimeout(() => {
        setOperations((p) => [...p, `stack.pop()`]);
        setStack((p) => p.slice(0, -1));
        createParticles(); 
      }, delay);
      delay += 500;

      if (i === words.length - 1) {
        setTimeout(() => {
          setShowTerminal(false);
          if (onComplete) onComplete();
        }, delay + 1200);
      }
    });
  };

  // animated code particles
  const createParticles = () => {
    const newParticles = Array.from({ length: 6 }).map(() => ({
      id: Math.random(),
      x: Math.random() * 40 - 20,
      y: Math.random() * 30 - 15,
    }));
    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles((prev) => prev.slice(6));
    }, 800);
  };

  return (
    <div className="flex flex-col items-center text-center mt-6 relative font-mono">
      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#0d1117] text-[#c9d1d9] border border-gray-700 rounded-lg w-[260px] sm:w-[300px] shadow-[0_0_15px_rgba(0,255,0,0.15)] p-3 text-left overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <span className="ml-1 text-[10px] text-gray-400">terminal.js</span>
            </div>

            {/* Typing Effect */}
            {showTyping ? (
              <motion.pre
                className="text-[#58a6ff] text-xs whitespace-pre-wrap leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {typedCode}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              </motion.pre>
            ) : (
              <div className="text-xs leading-relaxed">
                {operations.map((op, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#58a6ff]"
                  >
                    &gt; {op}
                  </motion.div>
                ))}

                {/* Stack Visual */}
                <div className="mt-2 relative">
                  <p className="text-gray-500">// Stack:</p>
                  <div className="flex justify-center mt-1 relative">
                    {/* stack */}
                    <div className="flex flex-col-reverse items-center border-l border-r border-gray-600 px-2 py-1 w-[55px] h-[65px] overflow-hidden">
                      <AnimatePresence>
                        {stack.map((item, i) => (
                          <motion.div
                            key={item + i}
                            initial={{ y: 25, opacity: 0 }}
                            animate={{
                              y: 0,
                              opacity: 1,
                              scale: [0.95, 1],
                              rotate: 0,
                              boxShadow: "0 0 6px rgba(0,255,0,0.3)",
                            }}
                            exit={{
                              y: -25,
                              opacity: 0,
                              scale: 0.95,
                              boxShadow: "0 0 0 rgba(0,255,0,0)",
                            }}
                            transition={{
                              duration: 0.4,
                              ease: "easeOut",
                            }}
                            className="bg-green-800/30 text-green-400 border border-green-500 rounded px-1 py-0.5 mt-1 text-[10px]"
                          >
                            {item}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>

                    {/* Code Particles */}
                    {particles.map((p) => (
                      <motion.span
                        key={p.id}
                        className="absolute text-green-400 text-[8px] select-none"
                        initial={{
                          x: 0,
                          y: 0,
                          opacity: 1,
                          scale: 1,
                        }}
                        animate={{
                          x: p.x,
                          y: p.y,
                          opacity: 0,
                          scale: 0.5,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                      >
                        {[";", "{", "}", "<", ">", "/"][Math.floor(Math.random() * 6)]}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final Text */}
      <motion.div
        className="absolute text-3xl sm:text-4xl font-semibold text-gray-100 font-generalsans mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: showTerminal ? 0 : 1 }}
        transition={{ duration: 1.2 }}
      >
        I turn ideas into{" "}
        <motion.span
          className="text-green-400 font-mono"
          animate={{
            textShadow: [
              "0 0 10px #00ff88",
              "0 0 20px #00ff88",
              "0 0 10px #00ff88",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          code<span className="animate-pulse">|</span>
        </motion.span>
      </motion.div>
    </div>
  );
};

export default StackAnimation;
