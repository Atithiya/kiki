import React from "react";
import background from "../assets/bg.png";
import { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Education() {
  const [education, setEducation] = useState([
    // ใส่รายละเอียดโปรเจคตรงนี้แล้วมันจะไป .map ใน card ให้เรา
    {
      title: "Bachelor of Law | Ramkhamhaeng University",
      detail: "2017-2019",
    },
    {
      title: "Lawyers Council of Thailand",
      detail: "September 2022 - March 2023",
    },
  ]);

  useEffect(() => {
    AOS.init({
      // Global settings go here
      // For example:
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the page when triggering animations
    });
  }, []);

  const img =
    "https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_1280.jpg";
  return (
    <section id="education">
      <div className=" p-5 pt-14">
        <div
          data-aos="fade-right"
          className="text-white font-semibold  text-center lg:text-start lg:text-7xl lg:ms-6 p-9 "
        >
          <h2 className="text-4xl lg:text-5xl text">EDUCATION</h2>
          {/* <progress className="progress w-56 bg-white"></progress> */}
        </div>
        {/* card education */}
        <div
          data-aos="fade-down"
          className="w-full text-white lg:ps-24 lg:pe-24 "
        >
          {/* card 1 */}
          {/* <div className="card w-full  glass   hover:scale-105 duration-200 shadow-md shadow-purple-600 ">
            <div className="card-body">
              <h2 className="card-title">
                Junior Software Developer Bootcamp | Generation Thailand
              </h2>
              <p>July - Oct 2023</p>
              <p>Technical Skills : Full Stack Developer, MERN Stack </p>
              <p>
                Behaviral Skills : Team work, Growth Mindset, Time management
                and more.
              </p>
            </div>
          </div> */}
          <div className="card w-full shadow-md shadow-blue-600 bg-zinc-900  ">
            <div className="card-body">
              <h2 className="card-title">Junior Software Developer Cohort 5</h2>
              <p>Generation Thailand</p>
              <p>July 2023 - October 2023</p>
              <p>
                Acquired technical and behavioral skills, including programming,
                web development (HTML, CSS, JavaScript, React, Node.js, Express,
                MongoDB), and important mindsets
              </p>
            </div>
          </div>
          <div className="card w-full mt-5 shadow-md shadow-blue-600 bg-zinc-900  ">
            <div className="card-body">
              <h2 className="card-title">Lawyers Council of Thailand</h2>
              <p>September 2022 - March 2023</p>
            </div>
          </div>
          {/* card 2 */}

          <div className="card w-full mt-5  duration-200 shadow-md shadow-blue-600 bg-zinc-900 ">
            <div className="card-body">
              <h2 className="card-title ">Bachelor of Law</h2>
              <p>Ramkhamhaeng University</p>
              <p>2017-2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
