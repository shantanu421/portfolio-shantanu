const Footer = () => {
  return (
    <footer className="c-space pt-5 pb-3 border-t border-black-300 flex flex-wrap justify-center md:justify-between items-center gap-6 text-center">
      <div className="text-white-500 flex gap-2">
        <p>Designed and Developed with 🖤</p>
      </div>

      <div className="flex gap-6 justify-center">
        <a
          href="https://github.com/shantanu421"
          target="_blank"
          rel=" noreferrer"
        >
          <img src="/assets/github.svg" alt="github" className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/shantanu_saraf"
          target="_blank"
          rel=" noreferrer"
        >
          <img src="/assets/twitter.svg" alt="twitter" className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/shantanusaraf/"
          target="_blank"
          rel=" noreferrer"
        >
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-5 h-5" />
        </a>
      </div>

      <p className="text-white-500 w-full md:w-auto">© 2025 Shantanu Saraf</p>
    </footer>
  );
};

export default Footer;
