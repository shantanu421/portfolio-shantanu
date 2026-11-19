import { motion } from "framer-motion";
import {
  workExperiences,
  certifications,
  education,
} from "../constants/index.js";
import Panel from "../components/Panel.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";

const nodeAddr = (i) => "0x" + (0x3000 + i * 0x40).toString(16).toUpperCase();

const NextLink = ({ to }) => (
  <motion.div
    className="flex flex-col items-center py-1"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.2 }}
    aria-hidden="true"
  >
    <div className="h-5 w-px bg-code-blue/60" />
    <span className="my-1 font-mono text-[10px] text-code-blue">
      next → {to}
    </span>
    <div className="h-5 w-px bg-code-blue/60" />
    <svg width="10" height="7" viewBox="0 0 10 7" className="text-code-blue">
      <path d="M0 0 L5 7 L10 0 z" fill="currentColor" />
    </svg>
  </motion.div>
);

const WorkExperience = () => {
  return (
    <section className="section" id="experience">
      <SectionHeading index="03" label="experience" title="My Work Experience" />

      <p className="mb-6 font-mono text-xs sm:text-sm text-code-muted">
        <span className="text-code-purple">Node*</span>{" "}
        <span className="text-code-text">career</span> = (
        <span className="text-code-purple">Node*</span>)
        <span className="text-code-green">{nodeAddr(0)}</span>;
      </p>

      <div className="mx-auto max-w-4xl">
        {workExperiences.map((item, index) => {
          const isLast = index === workExperiences.length - 1;
          return (
            <div key={item.id}>
              <Panel
                dots={false}
                title={
                  <span>
                    <span className="text-code-green">{nodeAddr(index)}</span>
                    <span className="mx-2">·</span>node[{index}]
                  </span>
                }
                meta={
                  <span className="hidden sm:inline">
                    next{" "}
                    <span className="text-code-blue">
                      {isLast ? "NULL" : nodeAddr(index + 1)}
                    </span>
                  </span>
                }
                className="group"
              >
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-code-border bg-code-panel/60 p-2 transition-colors group-hover:border-code-blue/60">
                    <img
                      className="h-full w-full object-contain"
                      src={item.icon}
                      alt=""
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                      <p className="text-lg font-semibold text-code-bright">
                        {item.name}
                        {item.location && (
                          <span className="font-normal text-code-dim">
                            , {item.location}
                          </span>
                        )}
                      </p>
                      <span className="chip">{item.duration}</span>
                    </div>
                    <p className="mt-1 font-mono text-sm text-code-blue">
                      {item.pos}
                    </p>

                    <p className="mt-4 text-code-dim leading-relaxed transition-colors duration-500 group-hover:text-code-text">
                      {item.title}
                    </p>

                    {item.projects && (
                      <ul className="mt-4 space-y-2 text-sm">
                        {item.projects.map((project) => (
                          <li
                            key={project.name}
                            className="flex gap-2 text-code-dim transition-colors duration-500 group-hover:text-code-text"
                          >
                            <span className="font-mono text-code-green">▸</span>
                            <span>
                              <span className="font-semibold text-code-green">
                                {project.name}:
                              </span>{" "}
                              {project.summary}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.award && (
                      <p className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-md border border-code-yellow/40 bg-code-yellow/10 px-3 py-1.5 text-sm text-code-text">
                        <span className="font-semibold text-code-yellow">
                          🏆 Award:
                        </span>
                        {item.award}
                      </p>
                    )}
                  </div>
                </div>
              </Panel>

              {isLast ? (
                <div className="flex flex-col items-center py-1" aria-hidden="true">
                  <div className="h-6 w-px bg-code-border" />
                  <span className="rounded-md border border-code-border bg-code-panel/60 px-3 py-1 font-mono text-[11px] text-code-muted">
                    NULL
                  </span>
                </div>
              ) : (
                <NextLink to={nodeAddr(index + 1)} />
              )}
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-full mt-14">
        <Panel title="certifications.json">
          <div className="flex flex-col gap-5">
            {certifications.map((cert) => (
              <div key={cert.name}>
                <p className="font-semibold text-code-bright">{cert.name}</p>
                <p className="mt-1 font-mono text-sm text-code-dim">
                  {cert.issuer} <span className="text-code-muted">·</span>{" "}
                  {cert.date}
                </p>
                {cert.credlyHref && (
                  <Button
                    href={cert.credlyHref}
                    variant="ghost"
                    size="sm"
                    containerClass="mt-4"
                  >
                    verify on credly ↗
                  </Button>
                )}
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="education.json" delay={0.1}>
          <div className="flex flex-col gap-5">
            {education.map((edu) => (
              <div key={edu.school}>
                <p className="font-semibold text-code-bright">{edu.school}</p>
                <p className="mt-1 text-code-dim">{edu.degree}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="chip">{edu.grade}</span>
                  <span className="chip">{edu.duration}</span>
                  <span className="chip">{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </section>
  );
};

export default WorkExperience;
