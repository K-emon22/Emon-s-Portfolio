import React, {useState} from "react";
import {MdMenuOpen} from "react-icons/md";
const Nav = () => {
  // const [currentTheme, setCurrentTheme] = useState("light");

  // useEffect(() => {
  //   const saved = localStorage.getItem("theme") || "light";
  //   document.documentElement.setAttribute("data-theme", saved);
  //   setCurrentTheme(saved);
  // }, []);

  // const changeTheme = (theme) => {
  //   document.documentElement.setAttribute("data-theme", theme);
  //   localStorage.setItem("theme", theme);
  //   setCurrentTheme(theme);
  // };
  const [activeSection, setActiveSection] = useState("Hero");
  const links = (
    <>
      <a
        href="#hero"
        onClick={() => setActiveSection("Hero")}
        className={`cursor-pointer px-3 py-1 rounded-md ${
          activeSection === "Hero" ? "text-white bg-blue-500" : "text-black"
        }`}
      >
        Hero
      </a>

      <a
        href="#about"
        onClick={() => setActiveSection("About Me")}
        className={`cursor-pointer px-3 py-1 rounded-md ${
          activeSection === "About Me" ? "text-white bg-blue-500" : "text-black"
        }`}
      >
        About Me
      </a>

      <a
        href="#skills"
        onClick={() => setActiveSection("Skills")}
        className={`cursor-pointer px-3 py-1 rounded-md ${
          activeSection === "Skills" ? "text-white bg-blue-500" : "text-black"
        }`}
      >
        Skills
      </a>

      <a
        href="#projects"
        onClick={() => setActiveSection("Projects")}
        className={`cursor-pointer px-3 py-1 rounded-md ${
          activeSection === "Projects" ? "text-white bg-blue-500" : "text-black"
        }`}
      >
        Projects
      </a>

      <a
        href="#education"
        onClick={() => setActiveSection("Education")}
        className={`cursor-pointer px-3 py-1 rounded-md ${
          activeSection === "Education"
            ? "text-white bg-blue-500"
            : "text-black"
        }`}
      >
        Education
      </a>

      <a
        href="#contact"
        onClick={() => setActiveSection("Contact")}
        className={`cursor-pointer px-3 py-1 rounded-md ${
          activeSection === "Contact" ? "text-white bg-blue-500" : "text-black"
        }`}
      >
        Contact
      </a>
    </>
  );

  return (
    <div>
      <div>
        {/* <select
        value={currentTheme}
        onChange={(e) => changeTheme(e.target.value)}
        className="select select-bordered w-full max-w-xs"
      >
        <option value="light">🌞 Light</option>
        <option value="dark">🌙 Dark</option>
        <option value="cupcake">🧁 Cupcake</option>
        <option value="bumblebee">🐝 Bumblebee</option>
        <option value="synthwave">🌌 Synthwave</option>
        <option value="dracula">🧛‍♂️ Dracula</option>
        <option value="valentine">💘 Valentine</option>
        <option value="halloween">🎃 Halloween</option>
        <option value="forest">🌲 Forest</option>
        <option value="aqua">💧 Aqua</option>
        <option value="pastel">🎨 Pastel</option>
        <option value="luxury">💎 Luxury</option>
        <option value="night">🌃 Night</option>
        <option value="winter">❄️ Winter</option>
        <option value="coffee">☕ Coffee</option>
      </select> */}
      </div>

      <nav className=" flex flex-row justify-between bg-blue-400/60 backdrop-blur-lg px-[2%] lg:px-[5%] my-1 border-2 py-1  rounded-b-0 rounded-t-lg">
        <div>Logo </div>
        <div className=" hidden md:flex flex-row md:gap-2 lg:gap-10 my-auto font-semibold ">
          {links}
        </div>

        <div className="flex flex-row  gap-5">
          <div>
            <button className="custom-btn w-[109px] bg-blue-400  hover:bg-blue-300 mb-3 mt-1  my-auto h-10  text-white   rounded-xl shadow-md transition-transform duration-300 hover:scale-105 active:translate-y-1">
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

          <div className="drawer drawer-end md:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content my-auto ">
              <label htmlFor="my-drawer-4" className="drawer-button">
                <h1 className="flex justify-end items-center">
                  <MdMenuOpen size={40} />
                </h1>
              </label>
            </div>

            <div className="drawer-side z-50 backdrop-blur-lg bg-white/60">
              <label
                htmlFor="my-drawer-4"
                className="drawer-overlay "
                aria-label="close sidebar"
              />

              <ul className="menu p-4 backdrop-blur-2xl w-2/4 sm:w-2/5 min-h-full  text-base-content space-y-2 border-2 bg-white/60  ">
                {links}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
