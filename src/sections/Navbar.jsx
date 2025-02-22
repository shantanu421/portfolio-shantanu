import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href, type, icon }) => (
        <li key={id} className="nav-li group">
          {type === "github" ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              <img
                src="/logos/github.png"
                alt="GitHub"
                className="github-logo"
              />
              <img src="/logos/star.png" alt="GitHub" className="star-logo" />
            </a>
          ) : (
            <a href={href} className="nav-li_a">
              <span className="flex items-center gap-2 transition-colors">
                {icon && (
                  <img
                    src={icon}
                    alt={name}
                    className="w-4 h-4 transition-all duration-500 opacity-70 group-hover:opacity-100"
                  />
                )}
                {name}
              </span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 
      ${
        scrolled
          ? "bg-black-200 shadow-lg opacity-95 transition-all duration-200 ease-out"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto mt-[-13px] c-space sm:bg-transparent bg-black-100 bg-opacity-85">
          <a
            href="/"
            className="text-blue-300 font-bold text-3xl transition-colors"
          >
            Ss.
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-w-0"}`}>
        <nav className="p-5 ">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
