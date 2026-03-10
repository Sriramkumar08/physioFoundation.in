import React from "react";
import "./ServicesPage.css";

import pain from "../assets/pain.jpg";
import sports from "../assets/sports.jpg";
import surgery from "../assets/surgery.jpg";
import ortho from "../assets/ortho.jpg";
import neuro from "../assets/neuro.jpg";
import home from "../assets/homevisit.jpg";

function Servicespage() {
  return (
    <section id="services" className="services-section">

 <div className="services-header">
        <h1>Our Services</h1>
        <p>Comprehensive physiotherapy solutions tailored to your recovery needs</p>
      </div>

      <div className="services-grid">

        <div className="service-card">
          <img src={pain} alt="Pain Therapy" />
          <h3>Pain Management Therapy</h3>
          <p>Advanced treatment for back pain, neck pain, and joint pain.</p>
        </div>

        <div className="service-card">
          <img src={sports} alt="Sports Injury" />
          <h3>Sports Injury Rehabilitation</h3>
          <p>Recover faster from sports injuries with expert care.</p>
        </div>

        <div className="service-card">
          <img src={surgery} alt="Post Surgery Rehab" />
          <h3>Post-Surgery Rehabilitation</h3>
          <p>Safe and structured recovery programs after surgery.</p>
        </div>

       

        <div className="service-card">
          <img src={ortho} alt="Orthopedic Physiotherapy" />
          <h3>Orthopedic Physiotherapy</h3>
          <p>Treatment for bone, muscle and joint conditions.</p>
        </div>

        <div className="service-card">
          <img src={neuro} alt="Neurological Physiotherapy" />
          <h3>Neurological Physiotherapy</h3>
          <p>Rehabilitation for stroke and neurological disorders.</p>
        </div>

        <div className="service-card">
          <img src={home} alt="Home Visit Physiotherapy" />
          <h3>Home Visit Physiotherapy</h3>
          <p>24/7 home visit support across Salem.</p>
        </div>

      </div>

    </section>
  );
}

export default Servicespage;