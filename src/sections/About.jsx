import React from "react";

const About = () => {
  return (
    <section className="c-space my-20" id="about">
      <p className="head-text mb-[25px]">Know me</p>

      <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-3 h-full bg-transparent">
        {/* First row: 1 : 2 */}
        <div className="col-span-1 row-span-1 ">
          <div className="grid-container bg-transparent">
            <img
              src="/assets/pfpx.png"
              alt="grid-1"
              className="w-full sm:h-[200px] h-52 object-contain brightness-75 opacity-80"
            />
            <div>
              <p className="grid-headtext">
                Hi, I'm <span className="text-blue-300">Shantanu </span>
              </p>
              <p className="grid-subtext">
                I love to design and develop Frontend and Backend. Being a{" "}
                <span className="text-blue-300">Fullstack developer</span>, I
                think it's a beautiful combination of creativity and logic. As a
                fresher, I am eagerly looking forward to working professionally
                and creating{" "}
                <span className="text-blue-300">impactful features</span> for
                the products that will significantly increase the{" "}
                <span className="text-blue-300">company's profit</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-1">
          <div className="grid-container">
            {/* Technologies Section */}
            <div className="flex flex-col items-center gap-10">
              <h2 className="sm:text-2xl text-xl font-semibold text-green-200">
                Technologies & Frameworks I work with
              </h2>
              <div className="grid grid-cols-6 gap-10">
                <img
                  src="/other-logos/html.svg"
                  alt="Html"
                  className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />

                <img
                  src="/other-logos/css.svg"
                  alt="Css"
                  className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />

                <img
                  src="/other-logos/js.svg"
                  alt="Js"
                  className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />

                <img
                  src="/other-logos/react.svg"
                  alt="ReactJs"
                  className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />

                <img
                  src="/other-logos/tailwind.svg"
                  alt="tailwind"
                  className="w-12 h-12 sm:w-16 sm:h-16 opacity-75 hover:opacity-100 transition-opacity duration-300"
                />

                <img
                  src="/other-logos/node.svg"
                  alt="NodeJs"
                  className="w-12 h-12 sm:w-16 sm:h-16 opacity-65 hover:opacity-100 transition-opacity duration-300"
                />

                <img
                  src="/other-logos/express.svg"
                  alt="ExpressJs"
                  className="w-12 h-12 sm:w-20 sm:h-14 opacity-55 hover:opacity-100 transition-opacity duration-300"
                />

                <img
                  src="/other-logos/mongodb.svg"
                  alt="MongoDb"
                  className="w-12 h-12 sm:w-16 sm:h-14 opacity-65 hover:opacity-100 transition-opacity duration-300"
                />

                <img
                  src="/other-logos/postgresql.svg"
                  alt="PostgreSql"
                  className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />

                <img
                  src="/other-logos/git.svg"
                  alt="Git"
                  className="w-12 h-12 sm:w-14 sm:h-14 opacity-65 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            {/* Tools Section */}
            <div className="flex flex-col items-center gap-10 mt-9">
              <h2 className="sm:text-2xl text-xl font-semibold text-green-200">
                Tools I use
              </h2>
              <div className="grid grid-cols-4 gap-16">
                <img
                  src="/other-logos/vscode.svg"
                  alt="VScode"
                  className="w-8 h-8 sm:w-16 sm:h-14 opacity-65 hover:opacity-100 transition-opacity duration-300"
                />

                <img
                  src="/other-logos/postman.svg"
                  alt="Postman"
                  className="w-8 h-8 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />

                <img
                  src="/other-logos/vercel.svg"
                  alt="Git"
                  className="w-8 h-8 sm:w-14 sm:h-14 opacity-50 hover:opacity-100 transition-opacity duration-300"
                />

                <img
                  src="/other-logos/cloudinary.svg"
                  alt="Postman"
                  className="w-8 h-8 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-1 grid-container flex flex-col items-center justify-center">
          {/* Title & Subtitle */}
          <div className="text-center mb-24">
            <p className="sm:text-2xl text-xl font-semibold sm:mt-0 mt-10 text-blue-200">
              Apart from Coding , I Love to pursue my other Passions , like
            </p>
          </div>

          {/* Hobbies Section */}
          <div className="grid grid-cols-3 gap-20">
            {/* Hobby 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/other-logos/space.png"
                alt="Space"
                className="sm:w-36 sm:h-36 w-24 h-24 opacity-50 hover:opacity-75 transition-opacity duration-300"
              />
              <p className="text-slate-300 sm:text-[16px] text-[15px] mt-2 text-center">
                Space Exploration
              </p>
            </div>

            {/* Hobby 2 */}
            <div className="flex flex-col items-center">
              <img
                src="/other-logos/football.png"
                alt="Football"
                className="sm:w-36 sm:h-36 w-24 h-24 opacity-50 hover:opacity-70 transition-opacity duration-300"
              />
              <p className="text-slate-300 sm:text-[16px] text-[15px] mt-2 text-center">
                Playing Football
              </p>
            </div>

            {/* Hobby 3 */}
            <div className="flex flex-col items-center">
              <img
                src="/other-logos/writing.png"
                alt="Writing"
                className="sm:w-36 sm:h-36 w-24 h-24 opacity-45 hover:opacity-65 transition-opacity duration-300"
              />
              <p className="text-slate-300 sm:text-[16px] text-[15px] mt-2 text-center">
                Writing
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-1 grid-container flex flex-col items-center justify-center">
          <div className="text-center grid gap-9 ">
            <img
              src="/other-logos/connect.svg"
              alt="Connect"
              className="w-10 h-10 sm:w-16 sm:h-16 place-self-center opacity-55 hover:opacity-100 transition-opacity duration-300"
            />
            <p className="sm:text-2xl text-xl font-semibold text-blue-200">
              Connect With Me
            </p>
            <p className="sm:text-lg text-[16px] text-gray-300 mt-2">
              Feel free to DM or reach out to me from the below platforms
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-12 mt-4">
              <a
                href="https://www.linkedin.com/in/shantanusaraf/"
                target="_blank"
                rel=" noreferrer"
              >
                <img
                  src="/other-logos/linkedin.svg"
                  alt="LinkedIn"
                  className="w-9 h-9 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </a>

              <a
                href="https://x.com/shantanu_saraf"
                target="_blank"
                rel=" noreferrer"
              >
                <img
                  src="/other-logos/twitter.svg"
                  alt="Twitter"
                  className="w-8 h-9 opacity-70 hover:opacity-100 transition-opacity duration-300 "
                />
              </a>

              <a
                href="https://github.com/shantanu421"
                target="_blank"
                rel=" noreferrer"
              >
                <img
                  src="/other-logos/github.svg"
                  alt="GitHub"
                  className="w-8 h-9 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </a>

              <a
                href="https://stackoverflow.com/users/19492017/shantanu"
                target="_blank"
                rel=" noreferrer"
              >
                <img
                  src="/other-logos/stackoverflow.svg"
                  alt="Stackoverflow"
                  className="w-8 h-9 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
