import React from "react";
import "../App.css";
import "../index.css";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin, FaDiscord} from "react-icons/fa";
const Hero = () => {
  return (
    <div>
      <section
        id="hero"
        className=" mt-16 flex items-center justify-center  mx-[2%] lg:mx-[5%] rounded-lg"
      >
        <div className="grid grid-cols-1  md:grid-cols-2 gap-10 lg:gap-0 w-full max-w-7xl">
          <div className="flex justify-center md:justify-start md:items-start items-center mb-auto ">
            <img
              className="rounded-2xl border-4 mt-1 border-blue-300 shadow-lg w-full max-w-sm animate-border-glow"
              src="IMG_20250522_235646.jpg"
              alt="Md Emon Sheikh"
            />
          </div>
{/* https://i.ibb.co/z1r6sms/IMG-20250522-235646.jpg */}
          <div className="flex flex-col  gap-5  ">
            <h1 className="text-4xl font-extrabold text-blue-600 text-center md:text-start">
              Md Emon Sheikh
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center md:text-start">
              MERN Stack Web Developer
            </h2>
            <p className="text-gray-600 font-medium text-justify leading-relaxed ">
              passionate about building modern, full-stack web applications
              using MongoDB, Express.js, React, and Node.js. Committed to
              writing clean, maintainable code and delivering real-world
              solutions with responsive, accessible, and user-friendly
              interfaces.
            </p>

            <div className="animate-border-glow  flex flex-row  gap-4 md:gap-1 lg:gap-4 mx-auto md:mx-0 border-4 rounded-full justify-center items-center  w-4/5 sm:w-3/5 md:w-3/5 lg:h-4/5 xl:w-2/5 p-1 ">
              <a
                href="https://discord.com/users/1320395812085432342"
                target="_blank"
                rel="noopener noreferrer"
                className=" mx-auto w-16 h-16 flex justify-center items-center border-2 rounded-full border-blue-400 hover:bg-blue-50 transition-transform hover:scale-105 duration-300"
              >
                <FaDiscord className="text-2xl text-indigo-600 hover:scale-125 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/K-emon22"
                target="_blank"
                rel="noopener noreferrer"
                className=" mx-auto w-16 h-16 flex justify-center items-center border-2 rounded-full border-blue-400 hover:bg-blue-50 transition-transform hover:scale-105 duration-300"
              >
                <FaGithub className="text-2xl text-gray-800 hover:scale-125 transition-transform duration-300" />
              </a>
              <h1 className=" mx-auto w-16 h-16 flex justify-center items-center border-2 rounded-full border-blue-400 hover:bg-blue-50 transition-transform hover:scale-105 duration-300">
                <FaLinkedin className="text-2xl text-blue-700 hover:scale-125 transition-transform duration-300" />
              </h1>
            </div>

            <div
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center md:justify-start "
            >
              <button className="custom-btn bg-blue-400 hover:bg-blue-300   text-white px-6 py-3 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 active:translate-y-1">
                <div className="button__content flex items-center gap-3 ">
                  <div className="button__icon ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M5 20h14a2 2 0 0 0 2-2v-7h-2v7H5V5h7V3H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2zm14-11V6l-5-5h-1v6h6zM13 11h-2v4H8l4 4 4-4h-3v-4z" />
                    </svg>
                  </div>
                  <p className="button__text font-semibold text-lg ">Resume</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
