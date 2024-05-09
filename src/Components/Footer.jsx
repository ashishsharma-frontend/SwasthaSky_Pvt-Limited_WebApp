import React from "react";
import "./CssPages/Footer.css";
import { TfiInstagram } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import FooterLogo from "./Images/HomeImage/SwasthSky.png";
import { NavLink } from "react-router-dom"; // Import NavLink

const Footer = () => {
  const handleNavLinkClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="need-help">
          <h3>Need Help ?</h3>
          <div className="footer-text">
            <span>+91 7513564359</span>
            <span>+91 9617036226</span>
            <span>Support@Swasthfuture.Com</span>
          </div>

          <h3>Office Address</h3>
          <div className="footer-text">
            <p>
              C4 ACHALNATH COLONY , MODEL TOWN <br />
              SIROL ROAD GWALIOR
            </p>
          </div>
        </div>

        <div className="company">
          <h3>Links</h3>
          <div className="footer-text">
            <NavLink to="/" onClick={() => handleNavLinkClick("home")}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => handleNavLinkClick("about")}>
              About Me
            </NavLink>

            <NavLink
              to="https://hospital.swasthfuture.com/"
              onClick={() => handleNavLinkClick("ourwork")}
            >
              Swasth HMS
            </NavLink>

            <NavLink
              to="https://market.swasthfuture.com/"
              onClick={() => handleNavLinkClick("ourwork")}
            >
              Swasth MarketPlace
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => handleNavLinkClick("contact")}
            >
              Contact Me
            </NavLink>
          </div>

          <div className="footer-text">
            <h3>Quick Access</h3>
            <NavLink to="https://market.swasthfuture.com/listing-category/hospitals/">
              Hospitals
            </NavLink>
            <NavLink to="https://market.swasthfuture.com/listing-category/doctors/">
              Doctors
            </NavLink>
            <NavLink to="https://market.swasthfuture.com/listing-category/clinics/">
              Clinics
            </NavLink>
            <NavLink to="https://market.swasthfuture.com/listing-category/blood-banks/">
              Blood Banks
            </NavLink>
          </div>
        </div>

        <div className="address">
          <div className="footer-logo">
            <img src={FooterLogo} alt="" />
            <h3>Swasth Sky</h3>
            <p style={{ marginTop: "1.2rem" }}>
              Swastha Sky: Where Health Meets Harmony. Join us in our journey
              towards a healthier tomorrow, where compassion and innovation
              converge for your well-being. Discover the essence of wellness
              with Swastha Sky.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-social-media">
    <a href="https://www.instagram.com/swasthasky/">
        <span>
            <TfiInstagram color="#FF6D60"></TfiInstagram>
            Instagram
        </span>
    </a>
    <a href="https://www.linkedin.com/company/swastha-sky-private-limited/">
        <span>
            <FaLinkedinIn color="#5272F2"></FaLinkedinIn>
            LinkedIn
        </span>
    </a>
    <a href="https://swasthfuture.com/facebook">
        <span>
        <FiFacebook />
             Facebook
        </span>
    </a>
    <a href="https://wa.link/tel528">
        <span>
            <FaWhatsapp color="#9FE6A0"></FaWhatsapp>
            WhatsApp
        </span>
    </a>
</div>


      <div className="copyright">
        <p>
          © Swastha Sky 2024. All rights reserved. Transforming healthcare, one
          innovation at a time.
        </p>
      </div>
    </div>
  );
};

export default Footer;
