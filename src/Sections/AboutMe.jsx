import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/3FTpooOZDw.json";
import {Fade, Slide} from "react-awesome-reveal";
import {motion} from "framer-motion";

const AboutMe = () => {
  return (
    <Fade triggerOnce cascade duration={600}>
      <section className="mx-[2%] lg:mx-[5%] mt-16 border border-blue-300 shadow-lg rounded-2xl p-6 md:p-10 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Slide direction="left" triggerOnce duration={600}>
            <div className="order-2 md:order-1 text-gray-800 leading-relaxed text-lg">
              <p className="text-justify">
                Hi! I’m <span className="font-semibold">Emon</span>, a
                passionate{" "}
                <span className="text-blue-600 font-semibold">
                  MERN Stack Developer
                </span>{" "}
                from Bangladesh. I specialize in building full-stack web
                applications using <strong>MongoDB</strong>,{" "}
                <strong>Express.js</strong>, <strong>React</strong>,{" "}
                <strong>Node.js</strong>, <strong>Tailwind CSS</strong>, and{" "}
                <strong>Firebase</strong>.
              </p>
              <p className="mt-4 text-justify">
                I'm driven by a love for solving real-world problems with clean
                code and responsive design. I continuously seek new challenges,
                and when I’m not coding, you’ll find me watching anime or TV
                series.
              </p>
            </div>
          </Slide>

          <Slide direction="right" triggerOnce duration={600}>
            <motion.div
              className="order-1 md:order-2"
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Lottie
                className="w-full h-full max-w-md mx-auto"
                animationData={animationData}
                loop={true}
              />
            </motion.div>
          </Slide>
        </div>
      </section>
    </Fade>
  );
};

export default AboutMe;
