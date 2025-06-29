import React, {useState} from "react";

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
      <div
        onClick={() => setActiveSection("Hero")}
        className={`cursor-pointer px-3 py-1 rounded-md ${
          activeSection === "Hero" ? "text-white bg-blue-500" : "text-black"
        }`}
      >
        Hero
      </div>

      <div
        onClick={() => setActiveSection("About Me")}
        className={`cursor-pointer px-3 py-1 rounded-md ${
          activeSection === "About Me" ? "text-white bg-blue-500" : "text-black"
        }`}
      >
        About Me
      </div>

      <div
        onClick={() => setActiveSection("Skills")}
        className={`cursor-pointer px-3 py-1 rounded-md ${
          activeSection === "Skills" ? "text-white bg-blue-500" : "text-black"
        }`}
      >
        Skills
      </div>

      <div
        onClick={() => setActiveSection("Projects")}
        className={`cursor-pointer px-3 py-1 rounded-md ${
          activeSection === "Projects" ? "text-white bg-blue-500" : "text-black"
        }`}
      >
        Projects
      </div>

      <div
        onClick={() => setActiveSection("Education")}
        className={`cursor-pointer px-3 py-1 rounded-md ${
          activeSection === "Education"
            ? "text-white bg-blue-500"
            : "text-black"
        }`}
      >
        Education
      </div>

      <div
        onClick={() => setActiveSection("Contact")}
        className={`cursor-pointer px-3 py-1 rounded-md ${
          activeSection === "Contact" ? "text-white bg-blue-500" : "text-black"
        }`}
      >
        Contact
      </div>
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

      <nav className=" sticky z-50 top-0 flex flex-row justify-between bg-blue-400/60 backdrop-blur-lg px-[2%] lg:px-[5%] my-1 border-2 py-1  rounded-b-lg">
        <div>Logo </div>
        <div className=" hidden md:flex flex-row md:gap-2 lg:gap-10 my-auto font-semibold ">
          {links}
        </div>

        <button className="custom-btn bg-blue-400 hover:bg-blue-300 mb-3 mt-1  my-auto  text-white px-62  rounded-xl shadow-md transition-transform duration-300 hover:scale-105 active:translate-y-1">
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
      </nav>
    </div>
  );
};

export default Nav;
