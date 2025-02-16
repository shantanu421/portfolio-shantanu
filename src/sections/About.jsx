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
  <div className="grid-container flex flex-col items-center gap-6">
    {/* Technologies Section */}
    <div className="flex flex-col items-center gap-10 ">
      <h2 className="text-2xl font-semibold text-white">Technologies/Frameworks I work with</h2>
      <div className="flex gap-6 mt-4">
        <img src="/other-logos/html2.svg" alt="Html" className="w-12 h-12 shadow-red-400 shadow-lg" />
        <img src="/other-logos/html2.svg" alt="Express.js" className="w-12 h-12" />
        <img src="/other-logos/html2.svg" alt="React.js" className="w-12 h-12" />
        <img src="/other-logos/html2.svg" alt="Node.js" className="w-12 h-12" />
      </div>
    </div>

    {/* Tools Section */}
    <div className="flex flex-col items-center gap-2 mt-32">
      <h2 className="text-xl font-semibold text-white">Tools I Use</h2>
      <div className="flex gap-6 mt-4">
        <img src="/other-logos/html.svg" alt="VSCode" className="w-12 h-12" />
        <img src="/other-logos/html.svg" alt="Postman" className="w-12 h-12" />
        <img src="/other-logos/html.svg" alt="Git" className="w-12 h-12" />
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
