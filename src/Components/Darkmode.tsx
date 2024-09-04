import { useState } from "react";
import sun from "../images/sun.png";
import moon from "../images/moon.png";

const Darkmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="darkmode-toggle"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className="hidden"
      />
      <label
        htmlFor="darkmode-toggle"
        className="flex items-center cursor-pointer bg-[#3b393e] rounded-[2rem]"
      >
        <img
          src={sun}
          alt="Sun"
          className={`w-6 h-6 mr-2 ${isDarkMode ? "opacity-0" : "opacity-100"}`}
        />
        <img
          src={moon}
          alt="Moon"
          className={`w-6 h-6 ${isDarkMode ? "opacity-100" : "opacity-0"}`}
        />
      </label>
    </div>
  );
};

export default Darkmode;
