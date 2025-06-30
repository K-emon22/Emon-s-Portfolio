import "./App.css";
import "./index.css";
import {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });

    const timer = setTimeout(() => {
      setLoding(false);
      AOS.refresh(); 
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (loding) {
    return <LoadingSpinner />;
  }

  return (
    <div className="px-0.5 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
      <div className="sticky z-50 top-0">
        <Nav />
      </div>

      <div id="hero" className="scroll-mt-24" data-aos="fade-up">
        <Hero />
      </div>

      <div id="about" className="scroll-mt-24" data-aos="fade-up">
        <AboutMe />
      </div>

      <div id="skills" className="scroll-mt-24" >
        <Skill />
      </div>

      <div id="projects" className="scroll-mt-24" data-aos="fade-up">
        <Project />
      </div>

      <div id="education" className="scroll-mt-24" data-aos="flip-up">
        <Education />
      </div>

      <div id="contact" className="scroll-mt-24"  data-aos="fade-right">
        <Contact />
      </div>
    </div>
  );
}

export default PortFolio;
