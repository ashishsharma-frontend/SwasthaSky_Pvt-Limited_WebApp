import React from "react";
import { IoMdMenu } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import "./CssPages/Header.css";
import SawasthLogo from "./Images/HomeImage/SwasthSky.png";

const Header = () => {
  const handleNavLinkClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const [showNavLinks, setShowNavLinks] = React.useState(false);

  const handleToggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  const closeNavLinks = () => {
    setShowNavLinks(false);
  };

  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/" onClick={() => handleNavLinkClick("home")}>
          <img src={SawasthLogo} alt="" /> <span style={{ color: "#0e1514" }}>swastha sky</span>
        </NavLink>
      </div>

      <nav className={`nav-links ${showNavLinks ? "active" : ""}`}>
        <NavLink
          to="/"
          onClick={() => {
            handleNavLinkClick("home");
            closeNavLinks();
          }}
        >
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeNavLinks}>
          About
        </NavLink>

        <NavLink to="/ourwork" onClick={closeNavLinks}>
          Our Work
        </NavLink>
        <NavLink to="/contact" onClick={closeNavLinks}>
          Contact Me
        </NavLink>
      </nav>

      <div className="menu-icon" onClick={handleToggleNavLinks}>
        {showNavLinks ? <CgClose /> : <IoMdMenu />}
      </div>
    </div>
  );
};

export default Header;
