import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
const galleryImages = [
  {
    img: "https://i.ibb.co/60qY5rcJ/Whats-App-Image-2025-06-30-at-01-35-49-1.jpg",
    title: "Html 5",
  },
  {
    img: "https://i.ibb.co/whr12c8C/Whats-App-Image-2025-06-30-at-01-35-49-2.jpg",
    title: "CSS 3",
  },
  {
    img: "https://i.ibb.co/CKMYGDDn/456-4562295-library-of-javascript-icon-graphic-freeuse-png-files.png",
    title: "JS es6",
  },
  
  {
    img: "https://i.ibb.co/wXCYSK9/Whats-App-Image-2025-06-30-at-01-35-50.jpg",
    title: "Tailwind",
  },
  {
    img: "https://i.ibb.co/WTzFLVG/Whats-App-Image-2025-06-30-at-01-35-51.jpg",
    title: "DaisyUi",
  },
  {
    img: "https://i.ibb.co/ynSpx0d6/Whats-App-Image-2025-06-30-at-01-35-48.jpg",
    title: "ReactJs",
  },
  {
    img: "https://i.ibb.co/YFLZs9rQ/Whats-App-Image-2025-06-30-at-01-35-51-2.jpg",
    title: "SwiperJs",
  },
  {
    img: "https://i.ibb.co/8LZq1QvY/Whats-App-Image-2025-06-30-at-01-35-49.jpg",
    title: "Firebase",
  },
  {
    img: "https://i.ibb.co/vvKv0hT1/Whats-App-Image-2025-06-30-at-01-35-48-2.jpg",
    title: "MongoDB",
  },
  {
    img: "https://i.ibb.co/cKJrhWGd/Whats-App-Image-2025-06-30-at-01-35-48-1.jpg",
    title: "NodeJs",
  },
  
   {
    img: "https://i.ibb.co/ch4vnmNT/images.png",
    title: "ExpressJs",
  },
];

const Skill = () => {
  return (
    <section className=" mx-[2%] lg:mx-[5%] mt-16 border-2 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>

      <div className="flex flex-col gap-10">
        <Marquee speed={90} gradient={false}>
          {galleryImages.map((skill, index) => (
            <div key={index} className="mx-4 text-center">
              <img
                src={skill.img}
                alt={skill.title}
                className="h-28 w-28 rounded-xl border-2 border-blue-400 shadow-lg mx-auto hover:scale-105 transition-transform duration-300"
              />
              <p className="text-sm font-medium text-gray-700 mt-2">
                {skill.title}
              </p>
            </div>
          ))}
        </Marquee>
        <Marquee speed={100} gradient={false} direction="right">
          {galleryImages.map((skill, index) => (
            <div key={index} className="mx-4 text-center">
              <img
                src={skill.img}
                alt={skill.title}
                className="h-28 w-28 rounded-xl border-2 border-blue-400 shadow-lg mx-auto hover:scale-105 transition-transform duration-300"
              />
              <p className="text-sm font-medium text-gray-700 mt-2">
                {skill.title}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
      <motion.div animate={{ x: [null, 100, 0] }} />
    </section>
  );
};

export default Skill;
