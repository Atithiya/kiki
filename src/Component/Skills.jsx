import React, { useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { useEffect } from "react";
import { BiLogoNodejs } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({
      // Global settings go here
      // For example:
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the page when triggering animations
    });
  }, []);
  const [skills, setSkills] = useState([
    {
      logo: <AiFillHtml5 />,
      logoName: "HTML",
    },
    {
      logo: <BiLogoCss3 />,
      logoName: "CSS",
    },
    {
      logo: <BsFillBootstrapFill />,
      logoName: "Bootstrap",
    },
    {
      logo: <SiTailwindcss />,
      logoName: "Tailwind CSS",
    },
    {
      logo: <BiLogoJavascript />,
      logoName: "JavaScript",
    },
    {
      logo: <BiLogoReact />,
      logoName: "ReactJS",
    },
    {
      logo: <BiLogoNodejs />,
      logoName: "NodeJS",
    },
    {
      logo: <SiExpress />,
      logoName: "ExpressJs",
    },
    {
      logo: <BiLogoMongodb />,
      logoName: "MongoDB",
    },
    {
      logo: <SiSqlite />,
      logoName: "SQLite",
    },
    {
      logo: <FaFigma />,
      logoName: "Figma",
    },
    {
      logo: <BsGit />,
      logoName: "Git",
    },
    // Add more skills as needed
  ]);

  return (
    <section id="skills" className="w-full">
      <div className=" p-5 pt-14">
        <div
          data-aos="fade-right"
          className="text-white font-semibold  text-center p-9 lg:text-start lg:ms-6 "
        >
          <h2 className="text-4xl lg:text-5xl ">SKILLS</h2>
          {/* <progress className="progress w-56 bg-white"></progress> */}
        </div>

        {/* Skills */}
        <div
          data-aos="fade-down"
          className="card text-white gap-5 grid grid-cols-3 lg:grid-cols-6 place-content-center "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="card w-full  text-neutral-content  bg-zinc-900 shadow-md shadow-blue-600  hover:scale-105 duration-200 text-xs lg:text-lg"
            >
              <div className="card-body items-center text-center">
                <div className="card-title text-5xl lg:text-6xl">
                  {skill.logo}
                </div>
                <p>{skill.logoName}</p>
              </div>
            </div>
          ))}
        </div>
        {/* End of skills */}
      </div>
    </section>
  );
}

export default Skills;
