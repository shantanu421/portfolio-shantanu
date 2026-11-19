import { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button.jsx";
import MemoryHero from "../components/MemoryHero.jsx";
import pdf from "/assets/Shantanu_Saraf_Resume.pdf";

const Hero = () => {
  const [bottomBoot, setBottomBoot] = useState([]);
  const [showResume, setShowResume] = useState(false);
  const booted = useRef(false);

  const runBottomBoot = useCallback(() => {
    if (booted.current) return;
    booted.current = true;

    const bottomSequence = ["> _ Launching Resume Interface..."];
    let delay = 600;
    bottomSequence.forEach((line, i) => {
      setTimeout(() => setBottomBoot((prev) => [...prev, line]), delay);
      delay += 1200;
      if (i === bottomSequence.length - 1) {
        setTimeout(() => setShowResume(true), delay);
        setTimeout(() => setBottomBoot([]), delay + 500);
      }
    });
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl mt-[-11px] text-2xl font-medium text-white text-center font-generalsans">
          Hii, I&apos;m Shantanu<span className="waving-hand">👋</span>
        </p>
        <p className="sm:text-sm text-xs text-code-dim text-center font-mono">
          <span className="text-code-muted">{"// "}</span>AI Application Developer
          <span className="text-code-muted"> · </span>Claude Certified Architect
        </p>
      </div>

      <div className="flex-1 flex items-center w-full pt-10 pb-32 sm:pb-36">
        <MemoryHero onReady={runBottomBoot} />
      </div>

      <AnimatePresence>
        {bottomBoot.length > 0 && (
          <motion.div
            key="bottomBoot"
            className="absolute bottom-12 left-0 right-0 text-center text-code-green font-mono text-sm z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {bottomBoot.map((line, i) => (
              <motion.p
                key={i}
                className="leading-relaxed"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                {line}
              </motion.p>
            ))}
            <motion.span
              className="inline-block animate-pulse"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResume && (
          <motion.div
            key="resume"
            className="absolute bottom-10 left-0 right-0 w-full z-10 c-space flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Button href={pdf} isBeam containerClass="px-7 py-3">
              <span className="text-code-muted">$</span> open resume.pdf
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
