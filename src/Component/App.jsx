import React from "react";

import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Testingskills from "./Testingskills";
import Testingproject from "./Testingproject";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Testingskills />
      <Skills />
      <Testingproject />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
