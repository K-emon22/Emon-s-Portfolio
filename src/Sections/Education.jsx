import {GraduationCap} from "lucide-react";
import {motion} from "framer-motion";

const Education = () => {
  return (
    <section className="w-full mt-16 px-6 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, ease: "easeOut"}}
        >
          <div className="inline-flex items-center gap-3 justify-center mb-3">
            <GraduationCap className="text-blue-600 w-7 h-7" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide">
              Education
            </h2>
          </div>
          <p className="text-gray-600 max-w-md mx-auto text-lg md:text-xl font-light leading-relaxed">
            My academic background and current pursuit in the field of Computer
            Science.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-w-3xl mx-auto cursor-pointer
                     hover:scale-[1.03] hover:shadow-blue-400 transition-transform duration-300"
          initial={{opacity: 0, scale: 0.95}}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true}}
          transition={{duration: 0.6, ease: "easeOut"}}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
          }}
          tabIndex={0}
          role="region"
          aria-label="Education Details"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-2 tracking-wide">
            B.Sc. in Computer Science & Engineering
          </h3>
          <p className="text-gray-800 font-medium mb-2 text-lg md:text-xl">
            Presidency University, Gulshan, Dhaka
          </p>
          <p className="text-gray-600 text-sm md:text-base font-light tracking-wide">
            2025 – Expected 2029 &nbsp;•&nbsp; Currently in 1st Year
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
