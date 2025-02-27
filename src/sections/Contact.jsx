import React, { useState } from "react";

const Contact = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("shantanusaraf4@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20 w-full" id="contact">
      <div className="flex items-center justify-center gap-4 relative">
        <p className="head-text">Contact me</p>

        <div className="relative w-[50px] h-[50px]">
          <img
            src="assets/email1.svg"
            alt="Email Icon"
            className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-500 opacity-70"
            style={{ transform: hasCopied ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full sm:gap-48 gap-10 mt-6">
        <div className="contactGrid-container sm:w-full">
          <img
            src="assets/grid4.png"
            alt="grid-4"
            className="w-full md:h-[126px] sm:h-[276px] h-28 object-contain sm:object-contain"
          />

          <div className="space-y-2 text-center">
            <p className="grid-subtext2 sm:text-xl mb-4">
              Hire me today and let us commence the process of achieving amazing
              things!
            </p>
            <div
              className="copy-container flex items-center justify-center gap-2 cursor-pointer"
              onClick={handleCopy}
            >
              <img
                src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                alt="copy"
                className="w-7 h-7"
              />
              <p className="lg:text-2xl md:text-xl text-xl text-gray_gradient text-white">
                shantanusaraf4@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
