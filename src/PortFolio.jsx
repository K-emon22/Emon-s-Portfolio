import "./App.css";
import "./index.css";
import {useEffect, useState} from "react";

import Hero from "./Sections/Hero";
import Nav from "./Sections/Nav";
import LoadingSpinner from "./Sections/LoadingSpinner";
import AboutMe from "./Sections/AboutMe";
import Skill from "./Sections/Skill";
import Education from "./Sections/Education";
import Contact from "./Sections/Contact";
import Project from "./Sections/Project";
function PortFolio() {
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 200);
  });
  if (loding) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className=" px-0.5 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
      <div className="sticky z-50 top-0 ">
        <Nav></Nav>
      </div>
      <div id="hero" className="scroll-mt-24">
        <Hero />
      </div>

      <div id="about" className="scroll-mt-24">
        <AboutMe></AboutMe>
      </div>

      <div id="skills" className="scroll-mt-24">
        <Skill />
      </div>

      <div id="projects" className="scroll-mt-24">
        <Project></Project>
      </div>

      <div id="education" className="scroll-mt-24">
        <Education />
      </div>

      <div id="contact" className="scroll-mt-24">
        <Contact />
      </div>
    </div>
  );
}

export default PortFolio;
