import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
// img
import keepFitImg from "../assets/pro2-keepfit.jpg";
import portImg from "../assets/pro5-port.png";
import adminImg from "../assets/pro7-admin.jpg";
import weatherImg from "../assets/pro4-weather.jpg";
import colmarImg from "../assets/pro6-colmar.jpg";
import registerImg from "../assets/pro1-reg.jpg";

function Projects() {
  useEffect(() => {
    AOS.init({
      // Global settings go here
      // For example:
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the page when triggering animations
    });
  }, []);
  const [project, setProject] = useState([
    {
      image: keepFitImg,
      cardTitle: "Test Case",
      cardDetail: "Test case & Test Scenario for Sign Up page ",
      demo: "https://docs.google.com/spreadsheets/d/15FPK0khDCfa7M1nA-sVyTSKoDY9LD38TWJHnBL4_t64/edit#gid=325026868",
    },
    {
      image: colmarImg,
      cardTitle: "Test Case",
      cardDetail: "Test case for Register page",
      demo: "https://docs.google.com/spreadsheets/d/1k4F98jPn8zjbICog5iZ6jmYXvqGFk3lyB7n14XVKOZ0/edit#gid=0",
    },
    {
      image: weatherImg,
      cardTitle: "Test Case",
      cardDetail: "Test case for Student Quiz",
      demo: "https://docs.google.com/spreadsheets/d/1k4F98jPn8zjbICog5iZ6jmYXvqGFk3lyB7n14XVKOZ0/edit#gid=0",
    },
    {
      image: registerImg,
      cardTitle: "Test Case",
      cardDetail: "Test case for Student Submission",
      demo: "https://docs.google.com/spreadsheets/d/1Bq7sQLCkfWOfSQgWzZG1i4XKfi4Lfvjjy31Zl4mwsKI/edit#gid=0",
    },
  ]);

  return (
    <section id="projects" className="w-full">
      <div className=" p-5 pt-14">
        <div
          data-aos="fade-right"
          className="text-white font-semibold  text-center lg:text-start lg:text-7xl lg:ms-6 p-9"
        >
          <h2 className="text-4xl lg:text-5xl ">TESTING SIDE PROJECT</h2>
          {/* <progress className="progress w-56 bg-white"></progress> */}
        </div>

        {/* Card */}
        <div
          data-aos="fade-down"
          className="w-full  sm:flex sm:justify-center  lg:grid lg:grid-cols-4 lg:gap-10 text-white gap-10  lg:ps-8 lg:pe-8 "
        >
          {/* .map ตรงนี้ โดยครอบทั้ง div  */}
          {project.map((item, index) => (
            <div
              key={index}
              className="card w-full  mt-5 lg:mt-0 bg-zinc-900 shadow-md shadow-blue-600  hover:scale-105 duration-200"
            >
              <figure>
                {/* <img
                  src={item.image}
                  alt="car!"
                  className="h-full w-full lg:h-48"
                /> */}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.cardTitle}</h2>
                <p className="text-sm">{item.cardDetail}</p>

                <div className="card-actions justify-center mt-5 ">
                  {/* <a
                    href={item.github}
                    target="_blank"
                    className="btn lg:text-base btn-active text-xs text-white rounded-full w-full lg:w-32  bg-gradient-to-r from-cyan-500 to-blue-500"
                  >
                    Github <AiFillGithub />
                  </a> */}
                  <a
                    href={item.demo}
                    target="_blank"
                    className="btn lg:text-base btn-active text-xs text-white rounded-full w-full lg:w-32  bg-gradient-to-r from-cyan-500 to-blue-500"
                  >
                    Link <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="p-8 lg:flex lg:justify-end">
          <Link
            to={"/MoreProjects"}
            className="btn lg:text-base btn-active text-xs text-white rounded-full w-full lg:w-52  bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            READ MORE <FiExternalLink />
          </Link>
        </div> */}
      </div>
    </section>
  );
}

export default Projects;
