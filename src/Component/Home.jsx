import React from "react";
import { TypeAnimation } from "react-type-animation";
import background from "../assets/bg.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      // Global settings go here
      // For example:
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the page when triggering animations
    });
  }, []);
  return (
    <section id="home" className="w-full">
      <div
        className="background h-80 "
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          data-aos="fade-left"
          className="text-white text-7xl text-center lg:text-start lg:text-9xl  lg:ms-10 pt-36 "
        >
          <h2 className="fname">ATITHIYA</h2>
          <h2 className=" lname ">INTHORN</h2>
        </div>
        <div
          data-aos="fade-right"
          className="text-center  font-semibold lg:text-start lg:ms-10 text-3xl lg:text-5xl  type italic "
        >
          <TypeAnimation
            sequence={["HELLO", 500, "SOFTWARE TESTER", 500, "SOFTWARE", 500]}
            style={{ fontSize: "1em" }}
            repeat={Infinity}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
