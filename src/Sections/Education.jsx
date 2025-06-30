import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="w-full mt-16 px-6 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 justify-center mb-3">
            <GraduationCap className="text-blue-600 w-6 h-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Education</h2>
          </div>
          <p className="text-gray-600 max-w-md mx-auto">
            My academic background and current pursuit in the field of Computer Science.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-3xl mx-auto transition hover:scale-[1.02] duration-300">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-1">
            B.Sc. in Computer Science & Engineering
          </h3>
          <p className="text-gray-800 font-medium mb-1">
            Presidency University, Gulshan, Dhaka
          </p>
          <p className="text-gray-600 text-sm">
            2025 – Expected 2029 &nbsp;•&nbsp; Currently in 1st Year
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;