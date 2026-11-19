const links = [
  { name: "GitHub", href: "https://github.com/shantanu421", icon: "/assets/github.svg" },
  { name: "X / Twitter", href: "https://x.com/shantanu_saraf", icon: "/assets/twitter.svg" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shantanusaraf/",
    icon: "/assets/linkedin.svg",
  },
];

const Footer = () => {
  return (
    <footer className="c-space mt-28 border-t border-code-border py-6 flex flex-wrap justify-center md:justify-between items-center gap-5 text-center font-mono text-xs text-code-muted">
      <p>
        <span className="text-code-green">{"/*"}</span> designed &amp; developed
        with 🖤 <span className="text-code-green">{"*/"}</span>
      </p>

      <div className="flex gap-3 justify-center">
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            aria-label={l.name}
            className="btn btn-ghost btn-icon"
          >
            <img src={l.icon} alt="" className="w-4 h-4" />
          </a>
        ))}
      </div>

      <p className="w-full md:w-auto">
        © {new Date().getFullYear()} Shantanu Saraf{" "}
        <span className="text-code-green">· exit 0</span>
      </p>
    </footer>
  );
};

export default Footer;
