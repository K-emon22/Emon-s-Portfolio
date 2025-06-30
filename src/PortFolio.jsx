import "./App.css";
import "./index.css";
import {useState} from "react";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin, FaDiscord} from "react-icons/fa";
import Hero from "./Sections/Hero";
import Nav from "./Sections/Nav";
import LoadingSpinner from "./Sections/LoadingSpinner";
import AboutMe from "./Sections/AboutMe";
import Skill from "./Sections/Skill";
import Education from "./Sections/Education";
import Contact from "./Sections/Contact";
function PortFolio() {
  const [loding, setLoding] = useState(true);

  useState(() => {
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
      <div>
        <Hero></Hero>
      </div>

      <div>
        {" "}
        <AboutMe></AboutMe>
      </div>

      {/* skills  */}

      <div>
        {" "}
        <Skill></Skill>
      </div>

      {/* Education  */}
      <div>
        <Education></Education>
      </div>

      {/* Contact  */}
      <div>
        {" "}
        <Contact></Contact>
      </div>
    </div>
  );
}

export default PortFolio;
