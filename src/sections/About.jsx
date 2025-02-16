import React from "react";
import Button from "../components/Button";

const About = () => {
  

  return (
    <section className="c-space my-20" id="about">
      <p className="head-text mb-[25px]">Know me</p>

      <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-3 h-full bg-transparent">
        {/* First row: 1 : 2 */}
        <div className="col-span-1 row-span-1 ">
          <div className="grid-container bg-transparent">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[200px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Shantanu</p>
              <p className="grid-subtext">
              I love to design and develop Frontend and Backend. Being a Fullstack developer, I think it's a beautiful combination of creativity and logic. I'm a fresher and really looking forward to working with the company, building impactful features for the products that will make a drastic impact on the company's profit.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-1">
  <div className="grid-container flex flex-col items-center">
    {/* Technologies Section */}
    <div className="flex flex-col items-center gap-10">
      <h2 className="sm:text-2xl text-xl font-semibold text-white">
        Technologies & Frameworks I work with
      </h2>
      <div className="grid grid-cols-6 gap-10">

      <img src="/other-logos/html.svg" alt="Html" className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />

      <img src="/other-logos/css.svg" alt="Css" className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />

      <img src="/other-logos/js.svg" alt="Js" className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />

      <img src="/other-logos/react.svg" alt="ReactJs" className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />

      <img src="/other-logos/tailwind.svg" alt="tailwind" className="w-12 h-12 sm:w-16 sm:h-16 opacity-75 hover:opacity-100 transition-opacity duration-300" />

      <img src="/other-logos/node.svg" alt="NodeJs" className="w-12 h-12 sm:w-16 sm:h-16 opacity-65 hover:opacity-100 transition-opacity duration-300" />

      <img src="/other-logos/express.svg" alt="ExpressJs" className="w-12 h-12 sm:w-20 sm:h-14 opacity-55 hover:opacity-100 transition-opacity duration-300" />

      <img src="/other-logos/mongodb.svg" alt="MongoDb" className="w-12 h-12 sm:w-16 sm:h-14 opacity-65 hover:opacity-100 transition-opacity duration-300" />

      <img src="/other-logos/postgresql.svg" alt="PostgreSql" className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />

      <img src="/other-logos/git.svg" alt="Git" className="w-12 h-12 sm:w-14 sm:h-14 opacity-65 hover:opacity-100 transition-opacity duration-300" />



      </div>
    </div>

    {/* Tools Section */}
    <div className="flex flex-col items-center gap-10 mt-9">
      <h2 className="sm:text-2xl text-xl font-semibold text-white">Tools I use</h2>
      <div className="grid grid-cols-4 gap-16">

      <img src="/other-logos/vscode.svg" alt="VScode" className="w-8 h-8 sm:w-16 sm:h-14 opacity-65 hover:opacity-100 transition-opacity duration-300" />

      <img src="/other-logos/postman.svg" alt="Postman" className="w-8 h-8 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />

      <img src="/other-logos/vercel.svg" alt="Git" className="w-8 h-8 sm:w-14 sm:h-14 opacity-50 hover:opacity-100 transition-opacity duration-300" />

      <img src="/other-logos/cloudinary.svg" alt="Postman" className="w-8 h-8 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />

      </div>
    </div>
  </div>
</div>


        {/* Second row: 2 : 1 */}
        <div className="col-span-2 row-span-1">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[220px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Passion Lorem, ipsum.</p>
              <p className="grid-subtext">
                Passion Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Quaerat exercitationem autem odit.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-1">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[220px] h-fit flex justify-center items-center">
              {/* 3D globe thing */}
            </div>
            <div>
              <p className="grid-headtext">I work Lorem ipsum dolor sit.</p>
              <p className="grid-subtext">
                Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum
                dolor sit. lor
              </p>
              <Button name={"Contact me"} isBeam containerClass={"w-full mt-6"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
