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
      cardTitle: "KeepFit",
      cardDetail:
        "Created a workout app for elderly users with a team, employing agile methods and receiving mentorship from an experienced developer. Designed 'My Activity' using Figma, ReactJS, and TailwindCSS, and crafted Keepfit's logo",
      github: "https://github.com/peth12/keepfit-react",
      demo: "https://keepfit-react.vercel.app/",
    },
    {
      image: portImg,
      cardTitle: "Portfolio",
      cardDetail:
        "Developed a static portfolio from the ground up, using ReactJS, CSS, and Tailwind CSS, while also implementing responsive web design for mobile devices",
      github: "https://github.com/Atithiya/portfoliQA",
      demo: "https://atithiya-in-portfolio.vercel.app/",
    },
    {
      image: adminImg,
      cardTitle: "React Assessment",
      cardDetail:
        "Created the admin panel by sending API requests, allowing admin to create, delete, and read data on the admin page, using ReactJS and TailwindCSS",
      github: "https://github.com/Atithiya/AtithiyaReactAccessment",
      demo: "https://atithiya-react-accessment.vercel.app/",
    },
    {
      image: colmarImg,
      cardTitle: "Colmar Academy",
      cardDetail:
        "Created my first static website with a focus on responsive web design, meeting specific requirements, using HTML and pure CSS",
      github: "https://github.com/Atithiya/Colmar-Academy-Test",
      demo: "https://colmar-academy-test.vercel.app/",
    },
    {
      image: weatherImg,
      cardTitle: "Weather App",
      cardDetail:
        "This web application uses HTML, CSS, and JavaScript to fetch and display current weather information from the OpenWeatherMap API for a specified location",
      github: "https://github.com/Atithiya/weatherApp/",
      demo: "https://weather-app-atithiya.vercel.app/",
    },
    {
      image: registerImg,
      cardTitle: "Register Form",
      cardDetail:
        "Crafted a front-end user registration form using HTML, CSS, and JavaScript. This form carefully validates user inputs and provides immediate error alerts",
      github: "https://github.com/Atithiya/GenerateQrCode",
      demo: "https://register-form-alpha.vercel.app/",
    },
  ]);

  return (
    <section id="projects" className="w-full">
      <div className=" p-5 pt-14">
        <div
          data-aos="fade-right"
          className="text-white font-semibold  text-center lg:text-start lg:text-7xl lg:ms-6 p-9"
        >
          <h2 className="text-4xl lg:text-5xl ">PROJECTS</h2>
          {/* <progress className="progress w-56 bg-white"></progress> */}
        </div>

        {/* Card */}
        <div
          data-aos="fade-down"
          className="w-full  sm:flex sm:justify-center  lg:grid lg:grid-cols-3 lg:gap-10 text-white gap-10  lg:ps-8 lg:pe-8 "
        >
          {/* .map ตรงนี้ โดยครอบทั้ง div  */}
          {project.map((item, index) => (
            <div
              key={index}
              className="card w-full  mt-5 lg:mt-0 bg-zinc-900 shadow-md shadow-blue-600  hover:scale-105 duration-200"
            >
              <figure>
                <img
                  src={item.image}
                  alt="car!"
                  className="h-full w-full lg:h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.cardTitle}</h2>
                <p className="text-sm">{item.cardDetail}</p>

                <div className="card-actions justify-center mt-5 ">
                  <a
                    href={item.github}
                    target="_blank"
                    className="btn lg:text-base btn-active text-xs text-white rounded-full w-full lg:w-32  bg-gradient-to-r from-cyan-500 to-blue-500"
                  >
                    Github <AiFillGithub />
                  </a>
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
