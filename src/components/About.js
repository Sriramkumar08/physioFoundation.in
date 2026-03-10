import React from "react";
import "./About.css";
import { FaMedal, FaClock, FaHeart, FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="about">
      <div className="about-container">

        <h2>About Physio Foundation</h2>
        <p className="about-subtitle">
          Your trusted partner in long-lasting pain relief and rehabilitation
        </p>

        <div className="about-cards">

          <div className="about-card">
            <div className="icon blue">
              <FaMedal />
            </div>
            <h4>Expert Therapists</h4>
            <p>Highly qualified and experienced physiotherapy professionals</p>
          </div>

          <div className="about-card">
            <div className="icon green">
              <FaClock />
            </div>
            <h4>24/7 Available</h4>
            <p>Round-the-clock physiotherapy care when you need it most</p>
          </div>

          <div className="about-card">
            <div className="icon purple">
              <FaHeart />
            </div>
            <h4>Personalized Care</h4>
            <p>Customized treatment plans for your specific needs</p>
          </div>

          <div className="about-card">
            <div className="icon orange">
              <FaCheckCircle />
            </div>
            <h4>Proven Results</h4>
            <p>Advanced therapy techniques for lasting recovery</p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default About;