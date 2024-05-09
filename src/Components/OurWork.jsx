import React, { useState } from "react";
import MainWork from "./Images/OurWorkImage/MainWork.svg";
import DoctorImg from "./Images/OurWorkImage/Doctor.svg";
import HospitalImg from "./Images/OurWorkImage/Hospital.svg";
import FuctionalityImg from "./Images/OurWorkImage/Functionality.svg";
import SwasthHms from "./Images/OurWorkImage/SwasthHMS.png";
import HMSAppImg from "./Images/OurWorkImage/HMSApp.svg";
import SwasthCardImg from "./Images/OurWorkImage/SwasthCard.svg";
import MarketPlace from "./Images/OurWorkImage/MarketPlace.svg";
import { FaEarlybirds } from "react-icons/fa";
import { GiQuill } from "react-icons/gi";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaPhoenixFramework } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import "./CssPages/OurWork.css";

// Array of step sections with titles, icons, and descriptions
const stepSections = [
  {
    title: "Login & SignUp",
    icon: <SiGnuprivacyguard />, // Icon for this step
    description:
      "To get started with Swasth HMS, create an account by clicking on the Sign Up button if you're new or log in using your credentials if you already have an account. Your login credentials ensure secure access to your data.",
  },
  {
    title: "Explore Modules",
    icon: <FaEarlybirds />, // Icon for this step
    description:
      "Once logged in, explore the intuitive interface to access different modules such as patient management, billing, inventory, and more. Each module is designed to streamline specific tasks, ensuring efficient workflow management within your healthcare facility.",
  },
  {
    title: "User-Friendly Experience",
    icon: <GiQuill />, // Icon for this step
    description:
      "Swasth HMS offers a user-friendly experience, making it easy for healthcare professionals to navigate and utilize its features efficiently. With intuitive navigation menus, clear interface design, and comprehensive user support, you can effectively manage your tasks and provide quality care to your patients.",
  },
];

// Array of tab contents with IDs, titles, images, and descriptions
const tabContents = [
  {
    id: "dashboard",
    title: "Patient and Doctor Dashboards",
    image: DoctorImg,
    description: [
      // Description for this tab, divided into multiple bullet points
      "Provides easy access to relevant information for patients and doctors. Allows patients to view their medical history, upcoming appointments, and prescriptions. Enables doctors to manage appointments, view patient records, and prescribe medication. Appointment Scheduling System",
      "Efficiently manages patient consultations by scheduling appointments. Allows patients to book appointments online or through the hospital's reception. Provides doctors with a centralized platform to view their schedules and manage appointments. Secure Document Management",
      "Ensures secure storage and management of patient documents and medical records. Utilizes encryption and access controls to safeguard sensitive patient information. Facilitates quick retrieval of patient records for healthcare professionals.",
    ],
  },
  {
    id: "hospital",
    title: "Hospital Management",
    image: HospitalImg,
    description: [
      // Description for this tab, divided into multiple bullet points
      "Displays key metrics such as available beds, number of doctors and nurses, and financial summaries. Provides administrators with real-time insights into hospital operations. Enables effective resource allocation and decision-making. Invoicing and Billing Management",
      "Streamlines financial transactions through automated invoicing and billing processes. Tracks patient payments, insurance claims, and outstanding balances. Generates detailed financial reports for accounting and auditing purposes. Inventory Management",
      "Tracks medical supplies and equipment to ensure adequate stock levels. Automatically notifies staff when inventory levels are low or expired. Optimizes inventory procurement and reduces wastage.",
    ],
  },
  {
    id: "Functionality",
    title: "Integration with Blood Bank Management",
    image: FuctionalityImg,
    description: [
      // Description for this tab, divided into multiple bullet points
      "Seamlessly manages blood supply inventory and donations. Facilitates coordination between hospitals and blood banks. Ensures timely availability of blood products for patient care. Live Consultation Feature",
      "Allows remote medical consultations through video conferencing or telemedicine platforms. Enables patients to consult with healthcare professionals from the comfort of their homes. Improves accessibility to healthcare services, especially for patients in remote areas. Pharmacy Systems Integration",
      "Integrates with pharmacy systems for efficient medication management. Enables electronic prescriptions and automatic refills. Streamlines communication between healthcare providers and pharmacists.",
    ],
  },
];

// Array of sections describing new features with titles, images, descriptions, and button details
const whatNewSections = [
  {
    title: "Download Our Swasth HMS App",
    image: HMSAppImg,
    description:
      "Swasth HMS offers a user-friendly web application with the same comprehensive features also available on its mobile app. Experience seamless digital health services on the go, ensuring convenience and accessibility for all users. Enjoy the power of Swasth HMS in the palm of your hand, revolutionizing healthcare management with ease.",
    buttonText: "Download App",
    buttonLink:
      "https://play.google.com/store/apps/details?id=com.swasthsky.hms",
  },
  {
    title: "Apply For Swasth Card",
    image: SwasthCardImg,
    description:
      "Unlock exclusive benefits with the Swasth Card! Enjoy up to 15% off on services and receive an additional 5% discount credited to your wallet when you use the Swasth Future app. Simply log in as a patient on the Swasth HMS web or app to access your Swasth Card and start saving on health billing today.",
    buttonText: "Apply Now",
    buttonLink: "#",
  },
  {
    title: "Get Into Swasth MarketPlace",
    image: MarketPlace,
    description:
      "Your one-stop destination for accessing top-rated doctors, blood banks, healthcare product bookings, and more. Explore detailed doctor profiles, read reviews, and easily book appointments. With a comprehensive database of health data, Swasth Marketplace is designed to assist both patients and doctors in making informed healthcare decisions.",
    buttonText: "MarketPlace",
    buttonLink: "https://market.swasthfuture.com/",
  },
];

const App = () => {
  const [currentTab, setCurrentTab] = useState("dashboard");

  // Function to switch between tabs
  const switchTab = (tab) => {
    setCurrentTab(tab);
  };

  // Function to render the content of the selected tab
  const renderContent = () => {
    const selectedTab = tabContents.find((tab) => tab.id === currentTab);
    if (!selectedTab) return null;

    return (
      <div className={selectedTab.id}>
        <div className="hms-tab">
          <Fade triggerOnce cascade direction="left" damping={0.3} delay={4}>
            <div className="hms-tab-img">
              <img src={selectedTab.image} alt="" />
            </div>
          </Fade>

          <div className="hms-tab-text">
            <Fade triggerOnce cascade damping={0.3} delay={4}>
              <h3>{selectedTab.title}</h3>
              {selectedTab.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="swasth-hms-container">
      <div className="about-heading">
        <Fade triggerOnce direction="up" duration={1000} delay={2}>
          <h2>
            Welcome to <span>Swasth HMS ?</span>
          </h2>
        </Fade>
      </div>
      <div className="swasth-hms-content">
        <div className="swasth-hms-intro">
          <div className="hms-top-text">
            <div className="small-title">
              <span
                style={{
                  color: "#8DECB4",
                  marginRight: "15px",
                  fontSize: "2.5rem",
                }}
              >
                <FaPhoenixFramework />
              </span>
              <span style={{}}>Swastha HMS Solution</span>
            </div>
            <Fade triggerOnce direction="up" delay={3}>
              <h2>Healthcare Management with Swasth HMS</h2>
            </Fade>

            <Fade triggerOnce direction="up" delay={5}>
              <p>
                Swasth HMS is a cutting-edge healthcare management solution
                designed to streamline hospital and clinic operations while
                enhancing patient care standards. It seamlessly integrates
                modules for patient records, appointments, billing, and
                inventory, among others. In India's evolving healthcare
                landscape, Swasth HMS is a beacon of innovation, providing
                tailored solutions to address unique challenges and promote
                accessibility, affordability, and quality care.
              </p>
            </Fade>
            <Fade triggerOnce direction="up" delay={6}>
              <a href="https://hospital.swasthfuture.com/">
                <button>Swasth HMS</button>
              </a>
            </Fade>
          </div>

          <div className="img-content">
            <Fade triggerOnce direction="left" delay={7}>
              <img src={MainWork} alt="" />
            </Fade>
          </div>
        </div>
        <div className="hms-key-features">
          <h2>Key Features Of <span style={{color: "#8b93ff"}}>Swasth Future</span></h2>

          {/* Buttons to switch between tabs */}
          <div className="hms-tab-buttons">
            {tabContents.map((tab) => (
              <button key={tab.id} onClick={() => switchTab(tab.id)}>
                {tab.id}
              </button>
            ))}
          </div>

          {/* Render the content of the selected tab */}
          <div className="hms-tab-content">{renderContent()}</div>
        </div>

        <div className="step-container">
          <div className="step-top">
            <Fade triggerOnce direction="up" delay={3}>
              <h3>How To Use <span style={{color: "#8b93ff"}}>Swasth Hms ?</span></h3>
            </Fade>
            <Fade triggerOnce direction="down" delay={4}>
              <p>
                Using Swasth HMS Is Straightforward <br /> And Intuitive. Here
                Step By Step
              </p>
            </Fade>
          </div>
          <div className="step-content">
            <div className="step-cards">
              {/* Render step cards */}
              {stepSections.map((step, index) => (
                <div className="step-card" key={index}>
                  <Fade triggerOnce direction="down" delay={2}>
                    <h3 style={{marginBottom:"0.50rem"}}>Step {index + 1}</h3>
                  </Fade>
                  <div className="step-card-text">
                    <Fade triggerOnce cascade damping={0.3} delay={4}>
                      <span style={{ color: "#0e1514" }}>{step.icon}</span>
                      <h3 style={{ fontSize: "1.5rem" }}>{step.title}</h3>
                      <p>{step.description}</p>
                    </Fade>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="what-new-container">
          <div className="what-new-top">
            <Fade triggerOnce direction="up" delay={5}>
              <img src={SwasthHms} alt="" />
            </Fade>
            <Fade triggerOnce direction="up" delay={7}>
              <h3>What New In <span style={{color: "#8b93ff"}}>Swasth Hms ?</span></h3>
            </Fade>
            <Fade triggerOnce direction="up" delay={9}>
              <p>
                Constantly Envolving, Swasth HMS Incorporates New Features And
                Enhancement To Meet The Dynamic Needs Of HealthCare Providers.
                Stay Update With The Latest Advancements In HealthCare Managment
                Technology.
              </p>
            </Fade>
          </div>
          <div className="what-new-content">
            {/* Render sections describing new features */}
            {whatNewSections.map((section, index) => (
              <div className="what-new-first" key={index}>
                <Fade
                  triggerOnce
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={3 + index}
                >
                  <img src={section.image} alt="" />
                </Fade>
                <div className="what-new-text">
                  <Fade triggerOnce direction="up" delay={2}>
                    <h3>{section.title}</h3>
                  </Fade>
                  <Fade triggerOnce direction="up" delay={4}>
                    <p>{section.description}</p>
                  </Fade>
                  <Fade triggerOnce direction="up" delay={6}>
                    <a href={section.buttonLink}>
                      <button>{section.buttonText}</button>
                    </a>
                  </Fade>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
