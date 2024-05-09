import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { FaFeatherAlt } from "react-icons/fa";
import {
  FaUsers,
  FaBookOpen,
  FaHome,
  FaShieldAlt,
  FaUserMd,
  FaVideo,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { IoCheckmarkDone } from "react-icons/io5";
import { PiEyeglasses } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { FaHeartPulse } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import HealthEduImg from "./Images/HomeImage/HealthEducation.jpg";
import HomeCareImg from "./Images/HomeImage/HealthCare.jpg";
import InsuranceImg from "./Images/HomeImage/Insurance.jpg";
import DoctorImg from "./Images/HomeImage/Doctors.jpg";
import TelemedicineImg from "./Images/HomeImage/Telemedicine.jpg";
import DownloadApp from "./Images/HomeImage/DownloadApp.svg";
import PlayStore from "./Images/HomeImage/PlayStore.svg";
import HomeImg from "./Images/HomeImage/Home.svg";
import ExploreTwo from "./Images/HomeImage/ExploreTwo.jpg";
import OurVisionImg from "./Images/HomeImage/OurVisionImg.jpg";
import WhoWeAreImg from "./Images/HomeImage/WhoWeAreImg.jpg";
import SwasthHMS from "./Images/HomeImage/SwasthHMS.png";
import MarketPlace from "./Images/HomeImage/MarketPlace.png";
import "./CssPages/Home.css";

function Home() {
  // State to track vertical scroll position
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Function to update scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    // Event listener for scroll
    window.addEventListener("scroll", handleScroll);
    // Clean-up function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const serviceCards = [
    {
      name: "Health Education",
      image: HealthEduImg,
      description:
        "Access valuable resources to enhance your understanding of health and well-being.",
      icon: <FaBookOpen />,
    },
    {
      name: "Homecare",
      image: HomeCareImg,
      description:
        "Discover convenient homecare solutions tailored to meet your specific healthcare needs effectively.",
      icon: <FaHome />,
    },
    {
      name: "Insurance",
      image: InsuranceImg,
      description:
        "Explore comprehensive insurance options to safeguard your health and financial well-being securely.",
      icon: <FaShieldAlt />,
    },
    {
      name: "Doctor Consultation",
      image: DoctorImg,
      description:
        "Connect with trusted doctors for professional consultations and personalized medical advice promptly.",
      icon: <FaUserMd />,
    },
    {
      name: "Telemedicine",
      image: TelemedicineImg,
      description:
        "Experience convenient virtual healthcare consultations from the comfort of your home instantly.",
      icon: <FaVideo />,
    },
  ];
  
  

  // Data for app cards
  const appCards = [
    { text: "Best Doctors", icon: <IoCheckmarkDone /> },
    { text: "Consultation", icon: <IoCheckmarkDone /> },
    { text: "Best Labs", icon: <IoCheckmarkDone /> },
    { text: "Blood Bank", icon: <IoCheckmarkDone /> },
  ];

  // Data for bottom cards
  const bottomCards = [
    {
      name: "Our Mission",
      icon: <TbTargetArrow />,
      description:
        "Empowering individuals with seamless access to superior healthcare, anytime, anywhere.",
      image: ExploreTwo,
    },
    {
      name: "Who We Are",
      icon: <FaUsers />,
      description:
        "We are Swastha Future Company, revolutionizing healthcare with innovative online solutions.",
      image: WhoWeAreImg,
    },
    {
      name: "Our Vision",
      icon: <PiEyeglasses />,
      description:
        "Transforming the future of healthcare through technology-driven accessibility and excellence.",
      image: OurVisionImg,
    },
  ];

  // State to track active bottom card
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="home-container">
      {/* Header Section */}
      <div className="home-content">
        <div className="home-text-content">
          {/* Heading and Description */}
          <div className="heading">
            <div className="small-title">
              <span
                style={{
                  color: "#FC4100",
                  marginRight: "15px",
                  fontSize: "2rem",
                }}
              >
                <FaHeartPulse />
              </span>

              <span style={{}}>Health Before Anything</span>
            </div>
            <Fade triggerOnce direction="up" duration={1000} delay={300}>
              <h2>Transforming Healthcare for a Better Tomorrow</h2>
            </Fade>
            <Fade triggerOnce direction="up" duration={1000} delay={500}>
              <p>
                At Swastha Sky, we're on a mission to revolutionize healthcare
                delivery and education, leveraging cutting-edge technology and
                heartfelt dedication. With innovation, compassion, and
                expertise, we're dedicated to making a positive impact on
                individuals and communities, ensuring healthier futures for all.
              </p>
            </Fade>
          </div>
          {/* Button for Consulting */}
          <Fade triggerOnce direction="up" duration={1000} delay={700}>
            <div className="btn">
              <button>
                <a
                  href="https://app.swasthfuture.com/health-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Free Consulting
                </a>
              </button>
            </div>
          </Fade>
        </div>
        {/* Image Section */}
        <div className="img-content">
          <Fade triggerOnce direction="right" duration={1000} delay={500}>
            <img src={HomeImg} alt="" />
          </Fade>
        </div>
      </div>

      <div className="swasth-sky-marquees">
        <Marquee>
          <p>
            {" "}
            Service Swasth Sky : https://www.swasthfuture.com <FaFeatherAlt />
          </p>
          <p>
            {" "}
            Swasth HMS Health Management System :
            https://hospital.swasthfuture.com <FaFeatherAlt />
          </p>
          <p>
            {" "}
            Swasth Marketplace : https://market.swasthfuture.com{" "}
            <FaFeatherAlt />
          </p>
          <p>
            {" "}
            Swasth Future App : Innovating Wellness Tomorrow <FaFeatherAlt />
          </p>
        </Marquee>
      </div>

      {/* Essential Services Section */}
      <div className="service-card-container">
        {/* Heading for Service Cards */}
        <div className="explore-top-reused">
          <p
            style={{
              color: "#45474B",
            }}
          >
            Our Services
          </p>
          <h3>Discover Essential Health Services</h3>
          <p>
            Explore our comprehensive range of essential health services
            meticulously designed to promote well-being and enhance quality of
            life.
          </p>
        </div>

        <div className="essential-services-container">
          {/* Service Cards */}
          {serviceCards.map((card, index) => (
            <div className="service-card" key={index}>
              <img src={card.image} alt={card.name} />
              <div className="service-card-text">
                <Fade
                  triggerOnce
                  direction="up"
                  duration={1000}
                  damping={3}
                  delay={500}
                >
                  <div className="service-icon">{card.icon}</div>
                  <h3>{card.name}</h3>
                  <p>{card.description}</p>
                </Fade>
              </div>
              {/* <div className="view-more">
                View More{" "}
                <span>
                  <GoArrowUpRight />
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Explore Section */}
      <div className="explore-main-container">
        <div className="explore-top-reused">
          <p style={{ color: "#45474B" }}>Explore Vision</p>
          <h3>Explore Our Visionary Approach</h3>
          <p>
            Delve into the core principles driving Swastha Future Company
            towards healthcare innovation and accessibility.
          </p>
        </div>
        {/* Bottom Section */}
        <div className="explore-bottom-content">
          {/* Image */}
          <Fade triggerOnce direction="left" duration={800} delay={500}>
            <div className="bottom-img-content">
              {activeCard !== null && (
                <img src={bottomCards[activeCard].image} alt="" />
                
              )}
            </div>
          </Fade>
          {/* Bottom Cards */}
          <div className="bottom-card-content">
            {bottomCards.map((card, index) => (
              <Fade
                key={index}
                triggerOnce
                damping={0.2}
                delay={200}
                direction="right"
                duration={800}
              >
                <div
                  className={`bottom-card ${
                    activeCard === index ? "active" : ""
                  }`}
                  onClick={() => setActiveCard(index)}
                >
                  <div className="bottom-icon">{card.icon}</div>
                  <div className="bottom-text">
                    <h3 className="bottom-heading">{card.name}</h3>
                    <p className="bottom-description">{card.description}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
     
        <div className="webapp-container">
          <div style={{marginTop: "" , marginBottom: "-1.5rem"}} className="explore-top-reused">
            <p style={{ color: "#45474B" }}>HMS Solution</p>
            <h3>Discover Swasth Solutions</h3>
            <p>
              Explore our innovative healthcare management systems and
              marketplace, designed to enhance patient care and optimize
              hospital operations.
            </p>
          </div>

          <div className="web-app">
            {/* Swasth HMS Card */}
            <div className="webapp-card">
              <div className="webapp-card-image">
                <Fade direction="left" triggerOnce duration={800} delay={300}>
                  <img src={SwasthHMS} alt="Swasth HMS Image" />
                </Fade>
              </div>
              <div className="webapp-card-content">
                <Fade triggerOnce direction="up" duration={800} delay={300}>
                  <h3 style={{ fontSize: "clamp(1.2rem, 5vw, 1.8rem)"}}>Swasth HMS</h3>
                </Fade>
                <Fade triggerOnce direction="up" duration={800} delay={500}>
                  <p>
                    Experience streamlined healthcare management with Swasth
                    HMS. From patient records to billing and inventory, our
                    comprehensive system ensures efficient and effective
                    hospital operations.
                  </p>
                </Fade>
                <Fade triggerOnce direction="up" duration={800} delay={700}>
                  <button style={{marginTop: "1rem"}}>
                    <a href="/ourwork" className="button">
                      Learn More
                    </a>
                  </button>
                </Fade>
              </div>
            </div>

            {/* Swasth Marketplace Card */}
            <div className="webapp-card">
              <div className="webapp-card-image">
                <Fade direction="left" triggerOnce duration={800} delay={500}>
                  <img src={MarketPlace} alt="Swasth Marketplace Image" />
                </Fade>
              </div>
              <div className="webapp-card-content">
                <Fade triggerOnce direction="up" duration={800} delay={300}>
                  <h3 style={{ fontSize: "clamp(1.2rem, 5vw, 1.8rem)"}}>Swasth Marketplace</h3>
                </Fade>
                <Fade triggerOnce direction="up" duration={800} delay={500}>
                  <p>
                    Discover a wide range of medical supplies, equipment, and
                    services on Swasth Marketplace. Our extensive network of
                    vendors ensures quality products at competitive prices,
                    empowering healthcare facilities for seamless operations.
                  </p>
                </Fade>
                <Fade triggerOnce direction="up" duration={800} delay={700}>
                <button style={{marginTop: "1rem"}}>
                    <a href="https://market.swasthfuture.com/" className="button">
                      Learn More
                    </a>
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        {/* Download App Section */}
        <div className="download-app-container">
          <h3
            style={{
              textAlign: "center",
              marginTop: "2.5rem",
              fontSize: "clamp(1rem, 5vw, 2rem)",
            }}
          >
            Download Swasth Future App
          </h3>
          <div className="download-main">
            <div className="download-text">
              <Fade direction="up" duration={1000} delay={3} triggerOnce>
                <p style={{ color: "#45474B" }}>Benefit You Will Get</p>
              </Fade>
              <Fade direction="up" duration={1000} delay={5} triggerOnce>

                <h3 style={{ fontSize: "2rem" }}>
                  Get the Swasth Future App for a Healthier Tomorrow
                </h3>
              </Fade>
              <Fade direction="up" duration={1000} delay={7} triggerOnce>

                <p>
                  Download our Swasth Future app today and embark on a journey
                  towards better health. With features designed to empower you
                  on your wellness path, it's your companion for a vibrant and
                  fulfilling life. Take control of your health and embrace a
                  brighter future with just a tap.
                </p>
              </Fade>
              <Fade direction="up" duration={1000} delay={9} triggerOnce>

                <div className="download-button">
                  <img
                    style={{
                      maxWidth: "200px",
                      width: "100%",
                      marginTop: "-2rem",
                    }}
                    src={PlayStore}
                    alt="playstore"
                  />
                  <a
                    style={{ marginBottom: "2rem" }}
                    href="https://play.google.com/store/apps/details?id=com.swasthsky.hms"
                  >
                    <span
                      style={{
                        cursor: "pointer",
                        color: "#5755FE",
                        fontSize: "1.2rem",
                      }}
                    >
                      Download It{" "}
                      <BsDownload
                        style={{ verticalAlign: "middle", marginLeft: "5px" }}
                      />
                    </span>
                  </a>
                </div>
              </Fade>
            </div>

            <img src={DownloadApp} alt="" />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
