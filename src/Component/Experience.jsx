import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Experience() {
  const [experience, setExperience] = useState([
    {
      title: "Quality Control Officer",
      company: "ShopeeXpress (Thailand) Co., Ltd.",
      year: "July 2022 - Present",
      jobDescription:
        "Reviewed employee work to guarantee parcel deliveries adhered to established processes",
    },
    {
      title: "KYC Officer",
      company: "Bitkub Online Co., Ltd.",
      year: "April 2021 - June 2022",
      jobDescription:
        "Verified identity documents before establishing customer accounts, in line with our commitment to security and compliance",
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
  return (
    <section id="experience" className="w-full">
      <div className=" p-5 pt-14">
        <div
          data-aos="fade-right"
          className="text-white font-semibold  text-center p-9 lg:text-start lg:text-7xl lg:ms-6 "
        >
          <h2 className="text-4xl lg:text-5xl  ">EXPERIENCE</h2>
          {/* <progress className="progress w-56 bg-white"></progress> */}
        </div>

        <div
          data-aos="fade-down"
          className="card text-white gap-5    lg:ps-24 lg:pe-24"
        >
          {experience.map((item, index) => (
            <div
              key={index}
              className="card w-full shadow-md shadow-blue-600 bg-zinc-900 "
            >
              <div className="card-body ">
                <div className="card-title ">{item.title}</div>
                <p>{item.company}</p>
                <p>{item.year}</p>
                <p>{item.jobDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
