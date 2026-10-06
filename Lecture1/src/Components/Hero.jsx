import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import Classes from "../Styles/Hero.module.css";
import Banner from "../assets/hero.png";

function Hero() {
  const [modal, setModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dob: "",
    appointment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // FIXED: Initialize EmailJS explicitly before calling send
    emailjs.init("hiXxfU30DUVi6q64W");

    emailjs
      .send(
        "service_554ipqp",
        "template_b2o56is",
        {
          user_name: formData.name,
          user_phone: formData.phone,
          user_dob: formData.dob,
          appointment_date: formData.appointment,
        }
      )
      .then(
        (result) => {
          console.log("Email status sent successfully:", result.text);
          setModal(true);

          // Reset your fields cleanly
          setFormData({
            name: "",
            phone: "",
            dob: "",
            appointment: "",
          });
        },
        (error) => {
          // Check your browser console log to view detailed errors if this hits
          console.error("EmailJS Error details:", error);
        }
      );
  };

  return (
    <>
      <div className={modal ? Classes.open : ""} style={{ display: modal ? "block" : "none" }}>
        <div className={Classes.modalContainer}>
          <h5>We Received Your Information</h5>
          <button onClick={() => setModal(false)}>Ok</button>
        </div>
      </div>

      <section id="hero" className={Classes.heroContainer}>
        <div className={Classes.overlay}></div>

        <div className={Classes.heroimage}>
          <img src={Banner} alt="Pacific Aviation Travel Banner" />
        </div>

        <div className={Classes.content}>
          <div className={Classes.title}>
            <span className={Classes.tagline}>
              Trusted Travel & Visa Solutions
            </span>

            <h1>
              Explore The World With{" "}
              <span className={Classes.nickName}>Pacific Aviation</span>
            </h1>

            <h4>
              Flight Booking • Tour Packages • Italy Visa Assistance
            </h4>

            <p className={Classes.description}>
              Your trusted partner for international travel, visa processing,
              holiday tours, and premium flight booking services worldwide.
            </p>
          </div>

          <form
            className={Classes.bookingContainer}
            onSubmit={sendEmail}
          >
            <div className={Classes.search}>
              <label>Need An Appointment?</label>
            </div>

            <div className={Classes.search}>
              <label>Please Type Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={Classes.search}>
              <label>Your Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className={Classes.search}>
              <label>Date Of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className={Classes.search}>
              <label>Preferred Appointment Date</label>
              <input
                type="date"
                name="appointment"
                value={formData.appointment}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={Classes.bookBtn}>
              Book Appointment
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Hero;