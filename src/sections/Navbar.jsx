import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const sectionIds = navLinks
  .filter((l) => l.type !== "github")
  .map((l) => l.href.replace("#", ""));

const useActiveSection = () => {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
};

const NavItems = ({ active, onNavigate }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href, type }) => {
        if (type === "github") {
          return (
            <li key={id} className="md:ml-2 lg:ml-3 max-md:mt-2">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm"
                aria-label="Star this portfolio on GitHub"
              >
                <img
                  src="/other-logos/github.svg"
                  alt=""
                  className="h-4 w-4"
                />
                <img src="/logos/star.png" alt="" className="h-3 w-3" />
                star
              </a>
            </li>
          );
        }

        const isActive = active === href.replace("#", "");
        return (
          <li key={id} className="max-md:w-full">
            <a
              href={href}
              onClick={onNavigate}
              className={`nav-link ${isActive ? "nav-link-active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              <span className={isActive ? "text-code-green/70" : "text-code-muted"}>
                ./
              </span>
              {name.toLowerCase()}
              {isActive && (
                <span className="absolute inset-x-3 -bottom-0.5 h-px bg-code-green shadow-[0_0_8px_#00ff88] max-md:hidden" />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-code-bg/85 backdrop-blur-md border-b border-code-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-3 c-space">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/assets/s-3.png"
              alt="Shantanu Saraf"
              className="h-9 w-auto object-contain"
            />
          </a>

          <button
            onClick={() => setIsOpen((o) => !o)}
            className="btn btn-ghost btn-icon md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt=""
              className="w-5 h-5"
            />
          </button>

          <nav className="md:flex hidden">
            <NavItems active={active} />
          </nav>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 border-t border-code-border" : "max-h-0"
        }`}
      >
        <nav className="p-5">
          <NavItems active={active} onNavigate={() => setIsOpen(false)} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
