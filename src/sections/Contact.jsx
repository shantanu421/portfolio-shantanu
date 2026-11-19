import { useState } from "react";
import Panel from "../components/Panel.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";

const EMAIL = "shantanusaraf4@gmail.com";

const Contact = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch {
      // clipboard unavailable; the address is still visible to copy by hand
    }
  };

  return (
    <section className="section w-full" id="contact">
      <SectionHeading index="04" label="contact" title="Contact me" align="center" />

      <Panel
        title="contact.sh"
        className="mx-auto max-w-2xl"
        bodyClassName="panel-body font-mono text-sm sm:text-base"
      >
        <p>
          <span className="text-code-green">$</span>{" "}
          <span className="text-code-text">cat message.txt</span>
        </p>
        <p className="mt-2 mb-6 font-generalsans text-base sm:text-lg text-code-dim">
          Feel free to reach out, I&apos;d love to connect and build something
          great together!
        </p>

        <p>
          <span className="text-code-green">$</span>{" "}
          <span className="text-code-text">echo $EMAIL</span>
        </p>
        <p className="mt-2 break-all text-lg sm:text-2xl text-code-string">
          {EMAIL}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button href={`mailto:${EMAIL}`} isBeam>
            say hello
          </Button>
          <Button
            variant="ghost"
            onClick={handleCopy}
            icon={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
            aria-live="polite"
          >
            {hasCopied ? "copied!" : "copy email"}
          </Button>
        </div>

        <p className="mt-6 text-code-muted">
          <span className="text-code-green">$</span>{" "}
          <span className="inline-block animate-pulse text-code-green">▍</span>
        </p>
      </Panel>
    </section>
  );
};

export default Contact;
