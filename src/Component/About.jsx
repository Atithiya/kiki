import React from "react";
import profilePicture from "../assets/profile.jpg";
import CV from "../assets/Atithiya Inthorn_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      // Global settings go here
      // For example:
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the page when triggering animations
    });
  }, []);
  return (
    <section id="about" className="w-full">
      <div className="pt-14 p-8 bg-gradient-to-b from-gray-800 to-black">
        <div
          data-aos="fade-right"
          className="text-white font-semibold  text-center lg:text-start lg:text-7xl lg:ms-6 p-9 "
        >
          <h2 className="text-4xl lg:text-5xl text ">ABOUT ME</h2>
        </div>

        <div data-aos="fade-down" className="w-full lg:flex  lg:ps-20 lg:pe-20">
          <div className="lg:w-1/2">
            <img
              src={profilePicture}
              alt="profile-picture"
              className="profile-picture w-[400px] lg:w-[500] shadow-md shadow-blue-600"
            />
          </div>
          <div className="lg:w-1/2 lg:text-start pt-5 lg:pt-0">
            <p className="text-white lg:text-lg ">
              Hello, I'm Atithiya Inthorn, I graduated from the Generation
              Thailand Bootcamp, where I acquired essential technical and soft
              skills for transitioning from a two-year career in the document
              verification industry. My genuine interest in software development
              is supported by robust technical abilities. Dedicated,
              hardworking, and consistently eager to learn, I am ready to apply
              my skills in a challenging Quality Assurance role.
            </p>
            <a
              href={CV}
              className="mt-5 btn lg:text-base btn-active text-xs text-white rounded-full w-full lg:w-48  bg-gradient-to-r from-cyan-500 to-blue-500 "
              target="_blank"
            >
              Download CV <AiOutlineDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
