import React from "react";

import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import Star from "../../assets/glowing-star.png";
import Fire from "../../assets/fire.png";
import Party from "../../assets/partying-face.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Moviemaniac</h1>
      <div className="navbar_links">
        <DarkMode />
        <a href="">
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </a>
        <a href="">
          Top Rated <img src={Star} alt="star emoji" className="navbar_emoji" />
        </a>
        <a href="">
          Upcoming{" "}
          <img src={Party} alt="partying-face emoji" className="navbar_emoji" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
