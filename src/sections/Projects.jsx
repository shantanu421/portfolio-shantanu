import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/CanvasLoader.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' }
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20" id="projects">
      <p className="head-text">My Recent Works</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5  bg-slate-900 bg-opacity-35 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg opacity-75"
          >
            <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-7 mt-1">
              <a
                href={currentProject.githubHref}
                target="_blank"
                rel="noreferrer"
                className="will-change-transform flex items-center gap-2 text-white-600 opacity-90 hover:brightness-125 transition-all hover:opacity-100 duration-300"
              >
                <p>GitHub</p>
                <img
                  src="/other-logos/github.svg"
                  alt="GitHub"
                  className="w-5 h-5 opacity-60"
                />
              </a>

              <a
                 className="will-change-transform flex items-center gap-2 cursor-pointer 
                 text-white-600 opacity-90 hover:opacity-100 
                 hover:brightness-125 transition-all duration-300"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
              >
                <p>Check Demo</p>
                <img
                  src="/assets/arrow-up.png"
                  alt="arrow"
                  className="w-3 h-3 opacity-70"
                />
              </a>
            </div>

          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="bg-slate-900 bg-opacity-25 rounded-lg h-96 md:h-full">
          <Canvas>
         
            <ambientLight intensity={1.5} />
            
            <directionalLight position={[100, 0, 10]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={1.5} position={[4.5, -4, 0]} rotation={[0, 0, 0]}>

                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
