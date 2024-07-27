import React from "react";
import "./DarkMode.css";
import { ReactComponent as Sun } from "../../assets/Sun.svg";
import { ReactComponent as Moon } from "../../assets/Moon.svg";

const DarkMode = () => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "light") {
    setLightTheme();
  } else {
    setDarkTheme;
  }
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme !== "light" || "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
