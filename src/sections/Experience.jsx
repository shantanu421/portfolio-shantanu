import { workExperiences } from "../constants/index.js";

const WorkExperience = () => {
  return (
    <section className="c-space my-20" id="experience">
      <div className="text-white-600 flex flex-col items-center justify-center ">
        <p className="head-text mb-[-20px]">My Work Experience</p>

        <div className="work-container ">
          <div className="work-content ">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div key={index} className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <a
                      className="work-content_logo"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </a>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
