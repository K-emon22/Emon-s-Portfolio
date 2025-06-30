import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/3FTpooOZDw.json";
const AboutMe = () => {
  return (
    <div className=" mx-[2%] lg:mx-[5%] mt-16 border-2 p-2 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center"> About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
        <div className="text-lg leading-relaxed my-auto order-2 md:order-1 ">
          <p className="text-justify">
            Hi! I’m <span className="font-semibold">Emon</span>, a passionate{" "}
            <span className="text-blue-600 font-semibold">
              MERN stack developer
            </span>{" "}
            from Bangladesh. I love building full-stack web apps using{" "}
            <strong>MongoDB</strong>, <strong>Express.js</strong>,{" "}
            <strong>React</strong>, and <strong>Node.js</strong>. I focus on
            clean code, real-world functionality, and responsive UI with tools
            like <strong>Tailwind CSS</strong>, <strong>Framer Motion</strong>,{" "}
            <strong>Firebase</strong>, and <strong>JWT</strong>. Outside of
            coding, I enjoy exploring new tech. I’m always eager to learn and
            build something meaningful.
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
