import { skillGroups } from "../constants/index.js";
import Panel from "../components/Panel.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";

const techLogos = [
  { name: "JavaScript", src: "/other-logos/js.svg" },
  { name: "React", src: "/other-logos/react.svg" },
  { name: "Next.js", src: "/assets/nextjs.svg" },
  { name: "Node.js", src: "/other-logos/node.svg" },
  { name: "Express", src: "/other-logos/express.svg" },
  { name: "PostgreSQL", src: "/other-logos/postgresql.svg" },
  { name: "MongoDB", src: "/other-logos/mongodb.svg" },
  { name: "Git", src: "/other-logos/git.svg" },
  { name: "Postman", src: "/other-logos/postman.svg" },
];

const hobbies = [
  { name: "Space Exploration", src: "/other-logos/space.png" },
  { name: "Playing Football", src: "/other-logos/football.png" },
  { name: "Writing", src: "/other-logos/writing.png" },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shantanusaraf/",
    icon: "/other-logos/linkedin.svg",
  },
  {
    name: "X / Twitter",
    href: "https://x.com/shantanu_saraf",
    icon: "/other-logos/twitter.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/shantanu421",
    icon: "/other-logos/github.svg",
  },
  {
    name: "Stack Overflow",
    href: "https://stackoverflow.com/users/19492017/shantanu",
    icon: "/other-logos/stackoverflow.svg",
  },
];

const toKey = (label) =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");

const Hl = ({ children }) => (
  <span className="text-code-blue">{children}</span>
);

const About = () => {
  return (
    <section className="section" id="about">
      <SectionHeading index="01" label="about" title="Know me" />

      {/* 1 column on phones & tablets (each panel full width), 3 columns on xl */}
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-5">
        {/* whoami — photo beside bio on tablets, stacked elsewhere */}
        <Panel title="whoami.md">
          <div className="flex flex-col md:flex-row xl:flex-col gap-5 md:gap-7 xl:gap-5 md:items-center xl:items-stretch">
            <div className="relative overflow-hidden rounded-lg border border-code-border bg-code-panel/40 md:w-64 md:shrink-0 xl:w-auto">
              <img
                src="/assets/pfpx.png"
                alt="Shantanu Saraf"
                className="w-full sm:h-[280px] md:h-60 xl:h-[280px] h-52 object-contain brightness-90"
              />
              <span className="absolute left-2 top-2 addr">0x0000</span>
            </div>
            <div>
              <p className="text-xl font-semibold text-code-bright mb-3">
                <span className="font-mono text-code-muted"># </span>Hey
                everyone,
              </p>
              <p className="text-code-dim leading-relaxed">
                I&apos;m an <Hl>AI Application Developer</Hl> with 1.5+ years
                of experience, working as an Associate Software Engineer at
                Decision Foundry. I build{" "}
                <Hl>production Generative AI apps</Hl>: LLM tool calling, AI
                agents, chatbots, prompt engineering and cost control, with
                Node.js and Python backends on AWS. I&apos;m also a{" "}
                <Hl>Claude Certified Architect</Hl> (Anthropic), and I enjoy
                turning ideas into products that make a real difference.
              </p>
            </div>
          </div>
        </Panel>

        {/* stack */}
        <Panel title="stack.ts" className="xl:col-span-2" delay={0.1}>
          <p className="font-mono text-sm text-code-muted mb-4">
            {"// Technologies & frameworks I work with"}
          </p>
          <div className="flex flex-wrap gap-3 mb-7">
            {techLogos.map((logo) => (
              <div
                key={logo.name}
                title={logo.name}
                className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg border border-code-border bg-code-panel/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-code-blue/60"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 w-7 sm:h-8 sm:w-8 object-contain opacity-70 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>

          <div className="font-mono text-sm">
            <span className="text-code-purple">const</span>{" "}
            <span className="text-code-text">stack</span>
            <span className="text-code-dim">{" = {"}</span>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-5 py-3 sm:pl-5 pl-3">
              {skillGroups.map((group, i) => (
                <div key={group.label}>
                  <p className="mb-2 text-xs">
                    <span className="text-code-purple">
                      &quot;{toKey(group.label)}&quot;
                    </span>
                    <span className="text-code-dim">: [</span>
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                    <span className="text-xs text-code-dim">
                      ]{i < skillGroups.length - 1 ? "," : ""}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <span className="text-code-dim">{"};"}</span>
          </div>
        </Panel>

        {/* hobbies */}
        <Panel
          title="hobbies.txt"
          className="xl:col-span-2"
          delay={0.1}
        >
          <p className="font-mono text-sm text-code-muted mb-5">
            {"// Apart from coding, I love to pursue my other passions"}
          </p>
          <div className="grid grid-cols-3 gap-3 sm:gap-5">
            {hobbies.map((hobby, i) => (
              <div
                key={hobby.name}
                className="group relative flex flex-col items-center rounded-lg border border-code-border bg-code-panel/40 px-2 pt-7 pb-4 transition-colors duration-300 hover:border-code-green/60"
              >
                <span className="absolute left-2 top-2 addr">
                  [{i}]
                </span>
                <img
                  src={hobby.src}
                  alt=""
                  className="sm:w-28 sm:h-28 w-16 h-16 object-contain opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                />
                <p className="mt-3 text-center font-mono text-[10px] min-[400px]:text-[11px] sm:text-sm leading-tight text-code-text break-words">
                  {hobby.name}
                </p>
              </div>
            ))}
          </div>
        </Panel>

        {/* connect */}
        <Panel
          title="connect.sh"
          delay={0.2}
        >
          <p className="font-mono text-sm">
            <span className="text-code-green">$</span>{" "}
            <span className="text-code-text">./connect --with shantanu</span>
          </p>
          <p className="mt-3 mb-6 text-code-dim">
            You can reach me through any of these platforms.
          </p>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <Button
                key={s.name}
                href={s.href}
                variant="ghost"
                size="sm"
                icon={s.icon}
                containerClass="justify-start py-2.5"
              >
                {s.name}
              </Button>
            ))}
          </div>
        </Panel>
      </div>
    </section>
  );
};

export default About;
