import "./App.css";
import "./index.css";
import {useState} from "react";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin, FaDiscord} from "react-icons/fa";
import Hero from "./Sections/Hero";
import Nav from "./Sections/Nav";
import LoadingSpinner from "./Sections/LoadingSpinner";
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
    <div className=" ">
      <Nav></Nav>
      <Hero></Hero>

      {/* about me */}

      <div className="border-4">about me</div>

      {/* skills  */}

      <div className="border-4">skills</div>

      {/* Education  */}
      <div className=" border-4 ">Educatin</div>

      {/* Contact  */}
      <div></div>
    </div>
  );
}

export default PortFolio;
