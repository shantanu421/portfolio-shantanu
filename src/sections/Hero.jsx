import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import pdf from "/assets/Shantanu_Saraf_Resume.pdf";
import {
  ReactLogo,
  NodeLogo,
  ExpressLogo,
  MongoDbLogo,
} from "../components/Logos.jsx";
import StackAnimation from "../components/StackAnimation.jsx";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const [stackDone, setStackDone] = useState(false);
  const [centerBoot, setCenterBoot] = useState([]);
  const [show3D, setShow3D] = useState(false);
  const [bottomBoot, setBottomBoot] = useState([]);
  const [showResume, setShowResume] = useState(false);

  const handleStackComplete = () => {
    setStackDone(true);

    const centerSequence = [
      "> _ Initializing environment...",
      "> _ Loading 3D assets...",
      "> _ Boot complete.",
    ];

    let delay = 0;
    centerSequence.forEach((line, i) => {
      setTimeout(() => setCenterBoot((prev) => [...prev, line]), delay);
      delay += 1000;
      if (i === centerSequence.length - 1) {
        setTimeout(() => {
          setShow3D(true);
          setTimeout(() => setCenterBoot([]), 100);
          setTimeout(() => runBottomBoot(), 1500);
        }, delay + 500);
      }
    });
  };

  const runBottomBoot = () => {
    const bottomSequence = ["> _ Launching Resume Interface..."];
    let delay = 0;
    bottomSequence.forEach((line, i) => {
      setTimeout(() => setBottomBoot((prev) => [...prev, line]), delay);
      delay += 1200;
      if (i === bottomSequence.length - 1) {
        setTimeout(() => setShowResume(true), delay);
        setTimeout(() => setBottomBoot([]), delay + 500);
      }
    });
  };

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl mt-[-11px] text-2xl font-medium text-white text-center font-generalsans">
          Hii, I'm Shantanu<span className="waving-hand">👋</span>
        </p>

        <StackAnimation onComplete={handleStackComplete} />
      </div>

      <AnimatePresence>
        {stackDone && centerBoot.length > 0 && (
          <motion.div
            key="centerBoot"
            className="absolute inset-0 flex flex-col justify-center items-center text-green-400 font-mono text-base z-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {centerBoot.map((line, i) => (
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
        {show3D && (
          <motion.div
            key="canvas"
            className="w-full h-full absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, 2, 20]} />
                <HeroCamera isMobile={isMobile}>
                  <HackerRoom
                    position={sizes.deskPosition}
                    scale={sizes.deskScale}
                  />
                </HeroCamera>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
              </Suspense>
            </Canvas>

            {/* <ReactLogo />
            <NodeLogo />
            <ExpressLogo />
            <MongoDbLogo /> */}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {bottomBoot.length > 0 && (
          <motion.div
            key="bottomBoot"
            className="absolute bottom-16 left-6 text-green-400 font-mono text-sm z-20"
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
            className="absolute bottom-7 left-0 right-0 w-full z-10 c-space text-left"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <a href={pdf} target="_blank" rel="noreferrer" className="w-fit">
              <Button
                name="Download Resume"
                isBeam
                containerClass="sm:w-96 font-mono"
              />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
