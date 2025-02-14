import React from "react";
import Button from "../components/Button";

const About = () => {
  

  return (
    <section className="c-space my-20" id="about">
      <p className="head-text mb-[25px]">Know me</p>

      <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-4 h-full bg-transparent">
        {/* First row: 1 : 2 */}
        <div className="col-span-1 row-span-1">
          <div className="grid-container bg-transparent">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[200px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Shantanu</p>
              <p className="grid-subtext">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                fugit ex reprehenderit.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-1">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[200px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur.
              </p>
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
