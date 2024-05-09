import React from "react";
import emailjs from "emailjs-com";
import "./CssPages/Contact.css";
import { TfiEmail } from "react-icons/tfi";
import { BiPhoneCall } from "react-icons/bi";
import { RiMapPin2Line } from "react-icons/ri";
import ConatctImg from "./Images/ContactImage/Contact.svg";
import { Fade } from "react-awesome-reveal";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      submitting: false,
      success: false,
      error: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are filled
    const { firstName, lastName, email, message } = this.state;
    if (!firstName || !lastName || !email || !message) {
      this.setState({ error: true });
      return;
    }

    this.setState({ submitting: true });

    emailjs
      .sendForm(
        "service_cjuhd69",
        "template_s6aj49f",
        event.target,
        "pB3Seu7wYpj8E9F-t"
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        // Clear form fields after successful submission
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          submitting: false,
          success: true,
          error: false,
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error.text);
        this.setState({ submitting: false, success: false, error: true });
      });
  };

  render() {
    const { firstName, lastName, email, message, submitting, success, error } =
      this.state;

    return (
      <div className="contact-me-container">
        <div className="contact-title">
          <Fade direction="up" triggerOnce>
            <h2>Contact Us</h2>
          </Fade>
        </div>
        <div className="contact-content">
          <div className="contact-text-content">
            <div className="text">
              <Fade direction="left" triggerOnce delay={5}>
                <img src={ConatctImg} alt="" />
              </Fade>
              <div className="contact-heading">
                <Fade direction="up" triggerOnce>
                  <h2>Contact Information</h2>
                </Fade>
              </div>
              <Fade
                direction="up"
                triggerOnce
                cascade
                damping={3}
                duration={1000}
                delay={4}
              >
                <div className="office-contact">
                  <div className="number-address">
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        <TfiEmail />
                      </span>{" "}
                      support@swasthfuture.com
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        <BiPhoneCall />
                      </span>
                      +91 7513564359
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        <RiMapPin2Line />
                      </span>{" "}
                      C4 Achalnath Colony , Model Town Sirol Road Gwalior
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <Fade direction="right" triggerOnce>
              <form className="contact-form" onSubmit={this.handleSubmit}>
                <label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={this.handleInputChange}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={this.handleInputChange}
                  />
                </label>
                <label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.handleInputChange}
                  />
                </label>
                <label>
                  <textarea
                    name="message"
                    placeholder="Type Your Message"
                    value={message}
                    onChange={this.handleInputChange}
                  />
                </label>
                {error && (
                  <Fade direction="down" triggerOnce>
                    <p className="error-msg">Please fill in all fields.</p>
                  </Fade>
                )}
                <button type="submit" disabled={submitting}>
                  {submitting
                    ? "Submitting..."
                    : success
                    ? "Submitted Successfully"
                    : "Submit"}
                </button>
              </form>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
