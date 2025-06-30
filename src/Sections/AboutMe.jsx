import React, { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/3FTpooOZDw.json";
import Aos from "aos";
const AboutMe = () => {
    useEffect(() => {
    Aos.refresh(); 
  }, []);

  return (
    <div  className=" mx-[2%] lg:mx-[5%] mt-16 border-2 p-2 rounded-lg ">
      <h2 className="text-3xl font-bold mb-6 text-center"> About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
        <div className="text-lg leading-relaxed my-auto order-2 md:order-1 ">
          <p className="text-justify">
            Hi! I’m <span className="font-semibold">Emon</span>, a passionate{" "}
            <span className="text-blue-600 font-semibold">
              MERN stack developer
            </span>{" "}
            from Bangladesh. I build full-stack apps with clean code and
            responsive UI using <strong>MongoDB</strong>,{" "}
            <strong>Express.js</strong>, <strong>React</strong>,{" "}
            <strong>Node.js</strong>, <strong>Tailwind CSS</strong>, and{" "}
            <strong>Firebase</strong>. I’m driven by real-world problem solving,
            continuous learning, and I unwind by watching anime and TV series.
          </p>
        </div>

        <div className="order-1 md:order-2">
          <Lottie
            className=" w-full h-full my-auto"
            animationData={animationData}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
