import React, { useState, useEffect } from "react";
import "./CssPages/About.css";
import jsPDF from "jspdf";
import { TbRibbonHealth } from "react-icons/tb";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { PiPersonArmsSpreadLight } from "react-icons/pi";
import Marquee from "react-fast-marquee";
import AboutMainImg from "./Images/AboutImage/AboutMain.png";
import PPTImg from "./Images/AboutImage/PPT.svg";
import CeoImg from "./Images/AboutImage/Ceo.jpg";
import DirectorImg from "./Images/AboutImage/Director.jpg";
import HospitalConnect from "./Images/AboutImage/HospitalConnect.svg";
import ManWithWingImg from "./Images/AboutImage/ManWithWing.svg";
import PPT01Img from "./Images/PPTImages/PPTONE.jpg";
import PPT02Img from "./Images/PPTImages/PPT02.jpg";
import PPT03Img from "./Images/PPTImages/PPT03.jpg";
import PPT04Img from "./Images/PPTImages/PPT04.jpg";
import PPT05Img from "./Images/PPTImages/PPT05.jpg";
import PPT06Img from "./Images/PPTImages/PPT06.jpg";
import PPT07Img from "./Images/PPTImages/PPT07.jpg";
import PPT08Img from "./Images/PPTImages/PPT08.jpg";
import PPT09Img from "./Images/PPTImages/PPT09.jpg";
import PPT10Img from "./Images/PPTImages/PPT10.jpg";
import PPT11Img from "./Images/PPTImages/PPT11.jpg";
import PPT12Img from "./Images/PPTImages/PPT12.jpg";
import PPT13Img from "./Images/PPTImages/PPT13.jpg";
import PPT14Img from "./Images/PPTImages/PPT14.jpg";
import PPT15Img from "./Images/PPTImages/PPT15.jpg";
import PPT16Img from "./Images/PPTImages/PPT16.jpg";
import PPT17Img from "./Images/PPTImages/PPT17.jpg";
import PPT18Img from "./Images/PPTImages/PPT18.jpg";
import PPT19Img from "./Images/PPTImages/PPT19.jpg";
import PPT20Img from "./Images/PPTImages/PPT20.jpg";
import { Fade } from "react-awesome-reveal";

import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

function About() {
  const [isOpen, setIsOpen] = useState(null); // Maintain state for currently open FAQ

  const toggleFAQ = (index) => {
    setIsOpen(index === isOpen ? null : index); // Toggle the FAQ open/close
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 20);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 20);
  };

  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + 20) % 20);
  };

  const downloadPdf = async () => {
    setIsDownloading(true);
    const doc = new jsPDF();
    const pptImages = [
      // Your image array here
      PPT01Img,
      PPT02Img,
      PPT03Img,
      PPT04Img,
      PPT05Img,
      PPT06Img,
      PPT07Img,
      PPT08Img,
      PPT09Img,
      PPT10Img,
      PPT11Img,
      PPT12Img,
      PPT13Img,
      PPT14Img,
      PPT15Img,
      PPT16Img,
      PPT17Img,
      PPT18Img,
      PPT19Img,
      PPT20Img,
    ];

    // Asynchronously add images to the PDF
    for (let i = 0; i < pptImages.length; i++) {
      if (i !== 0) {
        doc.addPage();
      }
      await addImageToPdf(doc, pptImages[i]);
    }

    // Save the PDF
    doc.save("ppt.pdf");
    setIsDownloading(false);
  };

  const addImageToPdf = (doc, image) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        doc.addImage(image, "JPEG", 10, 10, 190, 277);
        resolve();
      };
      img.src = image;
    });
  };

  

  return (
    <div className="swasth-about">
      <div className="swasth-about-content">
        <div className="about-heading">
          <Fade triggerOnce direction="up" duration={1000} delay={2}>
            <h2 style={{ marginBottom: "-0.50rem" }}>
              What About <span>Me ?</span>
            </h2>
          </Fade>
        </div>

        <div className="about-content">
          <div className="about-text-content">
            <div className="small-title">
              <span
                style={{
                  color: "#5755FE",
                  marginRight: "15px",
                  fontSize: "2rem",
                }}
              >
                <PiPersonArmsSpreadLight />
              </span>
              <span style={{}}>Welcome to Swastha Sky</span>
            </div>
            <div className="heading">
              <Fade triggerOnce direction="up" duration={1000} delay={4}>
                <h2>
                  Welcome to Swasth Revolutionizing Healthcare Management.
                </h2>
              </Fade>
            </div>
            <Fade triggerOnce direction="up" duration={1000} delay={5}>
              <p>
                At Swasth, we're dedicated to transforming healthcare management
                with our innovative solutions. Our cutting-edge technology
                streamlines operations and improves patient care, making us a
                trusted partner for healthcare providers worldwide.
              </p>
            </Fade>
            <p style={{fontFamily: "Great Vibes, cursive" ,
              marginTop :"1rem" ,
              marginBottom : "0.50rem",
              fontSize: "1.5rem" ,
              color: "#8b93ff"

            }}>Care stitched with compassion, healing every heartbeat.</p>
          </div>

          <div className="about-img-content">
            <Fade triggerOnce direction="right" duration={1000} delay={7}>
              <img src={AboutMainImg} alt="" />
            </Fade>
          </div>
        </div>

        <div className="trusted-content">
          <div className="connected-hospital">
            <Fade triggerOnce direction="left" delay={6}>
              <div className="trusted-img">
                <img src={HospitalConnect} alt="" />
              </div>
            </Fade>
            <div className="trusted-text">
              <Fade triggerOnce direction="up" delay={3}>
                <h3>Trusted Doctor Connect With Me</h3>
              </Fade>
              <Fade triggerOnce direction="up" delay={8}>
                <p>
                  Hospital Connect members are trusted partners of Swasth HMS,
                  collaborating seamlessly to enhance healthcare delivery. With
                  Swasth HMS, hospitals and healthcare facilities can streamline
                  operations and provide optimal patient care, strengthening
                  their partnership for a healthier future.
                </p>
              </Fade>
            </div>
          </div>
          <div className="trusted-heading">
            <Fade triggerOnce direction="up" duration={1000}>
              <h2>15+ Partner Put Have Trust In Us</h2>
            </Fade>
          </div>
          <div className="marqees">
            <Marquee>
              <p>
                Hospital 1 - Gwalior <TbRibbonHealth />
              </p>
              <p>
                Hospital 2 - Gwalior <TbRibbonHealth />
              </p>
              <p>
                Hospital 3 - Gwalior <TbRibbonHealth />
              </p>
              <p>
                Hospital 4 - Gwalior <TbRibbonHealth />
              </p>
              <p>
                Hospital 5 - Gwalior <TbRibbonHealth />
              </p>
              <p>
                Hospital 6 - Gwalior <TbRibbonHealth />
              </p>
              <p>
                Hospital 7 - Gwalior <TbRibbonHealth />
              </p>
              <p>
                Hospital 8 - Gwalior <TbRibbonHealth />
              </p>
              <p>
                Hospital 9 - Gwalior <TbRibbonHealth />
              </p>
              <p>
                Hospital 10 - Gwalior <TbRibbonHealth />
              </p>
              <p>
                Hospital 11 - Gwalior <TbRibbonHealth />
              </p>
              <p>
                Hospital 12 - Gwalior <TbRibbonHealth />
              </p>
              <p>
                Hospital 13 - Gwalior <TbRibbonHealth />
              </p>
              <p>
                Hospital 14 - Gwalior <TbRibbonHealth />
              </p>
              <p>
                Hospital 15 - Gwalior <TbRibbonHealth />
              </p>
            </Marquee>
          </div>
        </div>
        <div className="ppt-container">
          <div className="ppt-main-heading">
            <h3>Swasth Presentation</h3>
          </div>
          <div className="ppt-section">
            <div className="ppt-content">
              <Fade triggerOnce direction="up" duration={800} delay={300}>
                {" "}
                <img src={PPTImg} alt="" />
              </Fade>
              <Fade triggerOnce direction="up" duration={800} delay={300}>
                <h3>Swasth Solutions Presentation</h3>
              </Fade>
              <Fade triggerOnce direction="up" duration={800} delay={500}>
                <p>
                  Discover how Swasth Solutions is revolutionizing healthcare
                  with our innovative products and services. Our comprehensive
                  hospital management system and marketplace are designed to
                  enhance patient care and optimize hospital operations,
                  ensuring a seamless healthcare experience.
                </p>
              </Fade>
              <Fade triggerOnce direction="up" duration={1000} delay={5}>
                <button onClick={downloadPdf} disabled={isDownloading}>
                  {isDownloading ? "Downloading..." : "Download PDF"}
                </button>
              </Fade>
            </div>
            <div className="ppt-image">
              <Fade triggerOnce direction="right" duration={800} delay={700}>
                <div className="image-wrapper">
                  <span className="prev" onClick={handlePreviousClick}>
                    <RiArrowLeftDoubleFill size={30} />
                  </span>
                  <img
                    src={
                      currentImageIndex === 0
                        ? PPT01Img
                        : currentImageIndex === 1
                        ? PPT02Img
                        : currentImageIndex === 2
                        ? PPT03Img
                        : currentImageIndex === 3
                        ? PPT04Img
                        : currentImageIndex === 4
                        ? PPT05Img
                        : currentImageIndex === 5
                        ? PPT06Img
                        : currentImageIndex === 6
                        ? PPT07Img
                        : currentImageIndex === 7
                        ? PPT08Img
                        : currentImageIndex === 8
                        ? PPT09Img
                        : currentImageIndex === 9
                        ? PPT10Img
                        : currentImageIndex === 10
                        ? PPT11Img
                        : currentImageIndex === 11
                        ? PPT12Img
                        : currentImageIndex === 12
                        ? PPT13Img
                        : currentImageIndex === 13
                        ? PPT14Img
                        : currentImageIndex === 14
                        ? PPT15Img
                        : currentImageIndex === 15
                        ? PPT16Img
                        : currentImageIndex === 16
                        ? PPT17Img
                        : currentImageIndex === 17
                        ? PPT18Img
                        : currentImageIndex === 18
                        ? PPT19Img
                        : PPT20Img
                    }
                    alt=""
                    className="product-image"
                  />
                  <span className="next" onClick={handleNextClick}>
                    <RiArrowRightDoubleLine size={30} />
                  </span>
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <div className="ceo-invester">
          <div className="ceo-invester-heading">
            <Fade direction="up" duration={1000} delay={4} triggerOnce>
              <img
                style={{
                  maxWidth: "150px",
                  width: "100%",
                  marginLeft: "-1rem",
                }}
                src={ManWithWingImg}
                alt=""
              />
            </Fade>
            <Fade direction="up" triggerOnce>
              <h3
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                  marginBottom: "1rem",
                }}
              >
                Meet Our CEO & Director
              </h3>
            </Fade>
          </div>

          <div className="ceo-director-container">
            <div className="ceo-content">
              <Fade triggerOnce direction="left" duration={1000} delay={3}>
                <div className="important-profile">
                  {/* Team member image */}
                  <div className="imp-img">
                    <img src={CeoImg} alt="" />
                  </div>
                </div>
              </Fade>
              <div className="ceo-text">
                <Fade
                  triggerOnce
                  direction="up"
                  cascade
                  damping={0.3}
                  duration={1000}
                  delay={4}
                >
                  <h3 style={{ fontSize: "clamp(1rem, 5vw, 1.8rem)" }}>
                    {" "}
                    Harsh Sharma
                  </h3>
                  <span>Chief Executive Officer (CEO)</span>
                  <p>
                    Harsh Sharma, originally from Gwalior, brings over 8 years
                    of diverse experience in the medical field, including roles
                    as a healthcare service nurse and employment at Jayarog in
                    Gwalior for two years. His journey in healthcare has
                    inspired him to create innovative solutions to address
                    patient needs and manage healthcare challenges, leading to
                    the inception of our revolutionary digital health services.
                    As CEO, Harsh leads our team with a vision for transforming
                    healthcare through innovation and dedication to excellence.
                  </p>
                </Fade>
              </div>
            </div>

            <div className="director-content">
              <Fade triggerOnce direction="left" duration={500} delay={3}>
                <div className="important-profile">
                  {/* Team member image */}
                  <div className="imp-img">
                    <img src={DirectorImg} alt="" />
                  </div>
                </div>
              </Fade>
              <div className="director-text">
                <Fade
                  triggerOnce
                  direction="up"
                  cascade
                  damping={0.3}
                  duration={1000}
                  delay={4}
                >
                  <h3 style={{ fontSize: "clamp(1rem, 5vw, 1.8rem)" }}>
                    Ramkesh Vyas
                  </h3>
                  <span>Director</span>
                  <p>
                    Ramkesh Vyas, a seasoned professional in the healthcare
                    industry, boasts a decade of experience in various medical
                    capacities. Alongside his role as Director in our
                    organization, Ramkesh has successfully managed a nursing
                    college, partnered with nursing universities, and engaged in
                    multiple business ventures. His extensive background in
                    strategic planning and leadership provides invaluable
                    guidance and expertise, driving the success and growth of
                    our company.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <h3 style={{ fontSize: "clamp(1.5rem, 5vw, 2.2rem)" }}>
          Frequently Asked Questions ?
        </h3>

        <div className="faq">
          <div className="faq-card">
            <div className="faq-question" onClick={() => toggleFAQ(1)}>
              <h3>What is Swasth HMS?</h3>
              {isOpen === 1 ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </div>
            {isOpen === 1 && (
              <div className="faq-answer">
                <p>
                  Swasth HMS (Health Management System) is a comprehensive
                  healthcare management solution designed to streamline hospital
                  operations, from patient records to billing and inventory
                  management. It enhances efficiency and effectiveness in
                  delivering healthcare services.
                </p>
              </div>
            )}

            <div className="faq-question" onClick={() => toggleFAQ(2)}>
              <h3>
                How does Swasth Marketplace benefit healthcare facilities?
              </h3>
              {isOpen === 2 ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </div>
            {isOpen === 2 && (
              <div className="faq-answer">
                <p>
                  Swasth Marketplace offers a wide range of medical supplies,
                  equipment, and services at competitive prices. It empowers
                  healthcare facilities with access to quality products,
                  optimizing operations and ensuring seamless service delivery.
                </p>
              </div>
            )}

            <div className="faq-question" onClick={() => toggleFAQ(3)}>
              <h3>
                What role does Swasth Future play in the healthcare ecosystem?
              </h3>
              {isOpen === 3 ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </div>
            {isOpen === 3 && (
              <div className="faq-answer">
                <p>
                  Swasth Future is dedicated to revolutionizing healthcare
                  delivery through innovative online solutions. By providing
                  platforms like Swasth HMS and Swasth Marketplace, we aim to
                  enhance patient care, improve accessibility, and drive
                  positive change in the healthcare industry.
                </p>
              </div>
            )}
          </div>

          <div className="faq-card">
            <div className="faq-question" onClick={() => toggleFAQ(4)}>
              <h3>
                How does Swasth Future ensure data security and privacy within
                its ecosystem?
              </h3>
              {isOpen === 4 ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </div>
            {isOpen === 4 && (
              <div className="faq-answer">
                <p>
                  Swasth Future prioritizes data security and privacy by
                  implementing industry-standard measures such as encryption,
                  secure server infrastructure, and regular security audits. We
                  adhere to strict privacy policies to safeguard user
                  information.
                </p>
              </div>
            )}

            <div className="faq-question" onClick={() => toggleFAQ(5)}>
              <h3>
                Can healthcare providers integrate Swasth HMS with existing
                systems?
              </h3>
              {isOpen === 5 ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </div>
            {isOpen === 5 && (
              <div className="faq-answer">
                <p>
                  Yes, Swasth HMS offers integration capabilities to seamlessly
                  integrate with existing hospital management systems. This
                  allows healthcare providers to leverage the benefits of Swasth
                  HMS while maintaining continuity with their current systems.
                </p>
              </div>
            )}

            <div className="faq-question" onClick={() => toggleFAQ(6)}>
              <h3>
                What support and resources does Swasth Future provide to
                healthcare professionals using its platforms?
              </h3>
              {isOpen === 6 ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </div>
            {isOpen === 6 && (
              <div className="faq-answer">
                <p>
                  Swasth Future offers comprehensive support and resources to
                  healthcare professionals using its platforms, including
                  training sessions, technical assistance, and access to
                  educational materials. We are committed to ensuring a smooth
                  and successful experience for our users.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
