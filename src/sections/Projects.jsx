import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";

import { myProjects } from "../constants/index.js";
import CanvasLoader from "../components/CanvasLoader.jsx";
import DemoComputer from "../components/DemoComputer.jsx";
import Panel from "../components/Panel.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";

const projectCount = myProjects.length;

const slug = (title) =>
  title
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .trim()
    .replace(/[^a-z0-9]+/g, "-");

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) =>
      direction === "previous"
        ? (prevIndex - 1 + projectCount) % projectCount
        : (prevIndex + 1) % projectCount
    );
  };

  useGSAP(() => {
    gsap.fromTo(
      ".animatedText",
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );

    gsap.fromTo(
      ".animatedActions",
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    gsap.fromTo(
      ".animatedTechLogo",
      { opacity: 0, y: 10, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="section" id="projects">
      <SectionHeading index="02" label="projects" title="My Recent Works" />

      {/* projects[] — array cells as the project picker */}
      <div className="mb-5 font-mono text-xs sm:text-sm">
        <p className="mb-3 text-code-muted">
          <span className="text-code-purple">const</span>{" "}
          <span className="text-code-text">projects</span> = [
        </p>
        <div className="flex flex-wrap gap-3">
          {myProjects.map((project, i) => {
            const active = i === selectedProjectIndex;
            return (
              <button
                key={project.title}
                type="button"
                onClick={() => setSelectedProjectIndex(i)}
                aria-pressed={active}
                className={`group relative min-w-[120px] rounded-lg border px-4 pt-5 pb-2.5 text-left transition-all duration-300 ${
                  active
                    ? "border-code-green bg-code-green/10 text-code-green shadow-[0_0_18px_rgba(0,255,136,0.2)]"
                    : "border-code-border bg-code-bg/70 text-code-text hover:border-code-blue/60"
                }`}
              >
                <span
                  className={`absolute left-2.5 top-1.5 text-[10px] ${
                    active ? "text-code-green/80" : "text-code-muted"
                  }`}
                >
                  [{i}]
                </span>
                {project.title.replace(/\s*\(.*\)/, "")}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-code-muted">];</p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full">
        <Panel
          title={`projects/${slug(currentProject.title)}.md`}
          meta={`${selectedProjectIndex + 1} / ${projectCount}`}
          bodyClassName="panel-body flex flex-col gap-6 h-full"
          className="flex flex-col"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-code-border bg-code-panel/60">
              <img
                className="h-9 w-9 object-contain"
                src={currentProject.logo}
                alt=""
              />
            </div>
            <p className="text-code-bright text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
          </div>

          <div className="flex flex-col gap-4 text-code-dim leading-relaxed">
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {currentProject.tags.map((tag) => (
              <span key={tag.id} className="chip animatedTechLogo">
                <img src={tag.path} alt="" className="h-4 w-4 object-contain" />
                {tag.name}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 animatedActions">
            {currentProject.href !== "NA" && (
              <Button href={currentProject.href} icon="/assets/arrow-up.png">
                live demo
              </Button>
            )}
            <Button
              href={currentProject.githubHref}
              variant="ghost"
              icon="/other-logos/github.svg"
            >
              source
            </Button>
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-code-border pt-5">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleNavigation("previous")}
              aria-label="Previous project"
            >
              ← prev
            </Button>
            <span className="font-mono text-xs text-code-muted">
              projects[<span className="text-code-green">{selectedProjectIndex}</span>]
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleNavigation("next")}
              aria-label="Next project"
            >
              next →
            </Button>
          </div>
        </Panel>

        <Panel
          title="preview"
          meta={<span className="text-code-green">● live</span>}
          bodyClassName="h-96 lg:h-auto lg:flex-1 lg:min-h-[480px]"
          className="flex flex-col"
          hover={false}
          delay={0.1}
        >
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
        </Panel>
      </div>
    </section>
  );
};

export default Projects;
