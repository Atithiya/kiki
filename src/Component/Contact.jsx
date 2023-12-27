import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CV from "../assets/Atithiya Inthorn_CV.pdf";

function Contact() {
  useEffect(() => {
    AOS.init({
      // Global settings go here
      // For example:
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the page when triggering animations
    });
  }, []);
  return (
    <section id="contact" className="w-full">
      <div className="pt-14 p-5 ">
        <div
          data-aos="fade-right"
          className="text-white font-semibold  text-center p-9 lg:text-start  lg:ms-6 "
        >
          <h2 className="text-4xl lg:text-5xl text">
            CONTACT <span className="contact-me">ME</span>
          </h2>
          {/* <progress className="progress w-56 bg-white"></progress> */}
          <div data-aos="fade-down" className="text-lg  pt-5">
            <p>It would be amazing to receive oppotunity to work with you!</p>
          </div>
        </div>

        {/* contact-button */}
        <div
          data-aos="fade-down"
          className="lg:flex justify-center space-y-2 lg:space-y-0 lg:gap-5 w-full lg:my-10 p-10 text-white "
        >
          <div className=" ">
            <a
              href="mailto:atithiya.inthorn@gmail.com"
              className="btn btn-active text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-500 lg:text-base lg:w-72 lg:h-40 lg:rounded-2xl  h-28 flex flex-col"
            >
              <div className="text-3xl lg:text-6xl">
                <MdOutlineMail />
              </div>
              <div>atithiya.inthorn@gmail.com</div>
            </a>
          </div>
          <div className=" ">
            <a
              href="https://linkedin.com/in/atithiya"
              target="_blank"
              className="btn btn-active text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-500 lg:text-base lg:w-72 lg:h-40 h-28 lg:rounded-2xl flex flex-col"
            >
              <div className="text-3xl lg:text-6xl">
                <IoLogoLinkedin />
              </div>
              <div>linkedin.com/in/atithiya</div>
            </a>
          </div>
          <div className=" ">
            <a
              href="https://github.com/Atithiya"
              target="_blank"
              className="btn btn-active text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-500  lg:text-base lg:w-72 lg:h-40 h-28 lg:rounded-2xl flex flex-col"
            >
              <div className="text-3xl lg:text-6xl">
                <BsGithub />
              </div>
              <div>github.com/Atithiya</div>
            </a>
          </div>
          <div className=" ">
            <a
              href={CV}
              target="_blank"
              className="btn btn-active text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-500  lg:text-base lg:w-72 lg:h-40 h-28  lg:rounded-2xl flex flex-col"
            >
              <div className="text-3xl lg:text-6xl">
                <CgFileDocument />
              </div>
              <div>DOWNLOAD CV</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
