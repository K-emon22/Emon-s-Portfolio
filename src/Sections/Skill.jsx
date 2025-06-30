import React from "react";
import Marquee from "react-fast-marquee";
import {motion} from "framer-motion";

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
  {img: "https://i.ibb.co/ch4vnmNT/images.png", title: "ExpressJs"},
];

const Skill = () => {
  return (
    <motion.section
      className="mx-[2%] lg:mx-[5%] mt-16 border border-blue-300 rounded-2xl p-4 md:p-6 bg-white shadow-xl overflow-hidden"
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.6, ease: "easeOut"}}
    >
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
        My Skills
      </h2>

      <div className="flex flex-col gap-12">

        <Marquee speed={35} gradient={false} >
          {galleryImages.map((skill, index) => (
            <motion.div
              key={index}
              className="mx-5 py-3 text-center"
              initial={{rotate: -5, opacity: 0}}
              whileInView={{rotate: 0, opacity: 1}}
              transition={{duration: 0.4, delay: index * 0.04}}
              viewport={{once: true}}
            >
              <motion.img
                src={skill.img}
                alt={skill.title}
                className="h-20 w-20 aspect-square object-contain  rounded-lg border-2 border-blue-400 shadow-md bg-white p-1"
                whileHover={{
                  scale: 1.1,
                  rotate: 2,
                  boxShadow: "0 10px 20px rgba(59,130,246,0.3)",
                }}
                transition={{type: "spring", stiffness: 200}}
              />
              <p className="text-sm font-medium text-gray-800 mt-2">
                {skill.title}
              </p>
            </motion.div>
          ))}
        </Marquee>


        <Marquee speed={35} gradient={false} direction="right" >
          {galleryImages.map((skill, index) => (
            <motion.div
              key={index}
              className="mx-5 text-center py-3"
              initial={{rotate: 5, opacity: 0}}
              whileInView={{rotate: 0, opacity: 1}}
              transition={{duration: 0.4, delay: index * 0.04}}
              viewport={{once: true}}
            >
              <motion.img
                src={skill.img}
                alt={skill.title}
                className="h-20 w-20 aspect-square object-contain rounded-lg border-2 border-blue-400 shadow-md bg-white p-1"
                whileHover={{
                  scale: 1.1,
                  rotate: -2,
                  boxShadow: "0 10px 20px rgba(59,130,246,0.3)",
                }}
                transition={{type: "spring", stiffness: 200}}
              />
              <p className="text-sm font-medium text-gray-800 mt-2">
                {skill.title}
              </p>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </motion.section>
  );
};

export default Skill;
