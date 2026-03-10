import React from "react";
import "./DoctorPage.css";
import { FaBookOpen, FaAward, FaCalendarAlt } from "react-icons/fa";

// import shankar from "../images/shankar.jpg";
// import manoj from "../images/manoj.jpg";
// import shalini from "../images/shalini.jpg";
// import shantikumar from "../images/shantikumar.jpg";

function DoctorsPage() {
  return (
    <section id="doctors" className="section">

      <div className="Tag">
        <h1>Our Expert Physiotherapists</h1>
        <p>
          Meet our team of highly qualified and experienced physiotherapy
          professionals dedicated to your recovery
        </p>
      </div>

      <div className="doctor-container">

        {/* Doctor 1 */}

        <div className="card">
          {/* <img src={shankar} alt="Dr Shankar" className="doctor-img"/> */}

          <h2>Dr. E. Shankar (PT)</h2>
          <p className="role">Senior Physiotherapist</p>

          <p><FaBookOpen className="icon green"/> BPT</p>
          <p><FaAward className="icon purple"/> Sports, Musculoskeletal, Yoga Therapy</p>
          <p><FaCalendarAlt className="icon orange"/> 10+ Years Experience</p>

          <p className="desc">
            Expert in sports injury rehabilitation, musculoskeletal therapy
            and holistic yoga-based physiotherapy treatments.
          </p>
        </div>


        {/* Doctor 2 */}

        <div className="card">
          {/* <img src={manoj} alt="Dr Manoj" className="doctor-img"/> */}

          <h2>Dr. M. Manoj</h2>
          <p className="role">Consultant Physiotherapist</p>

          <p><FaBookOpen className="icon green"/> BPT</p>
          <p><FaAward className="icon purple"/> Orthopedic & Neuro Rehabilitation</p>
          <p><FaCalendarAlt className="icon orange"/> 7+ Years Experience</p>

          <p className="desc">
            Specialized in orthopedic rehabilitation, neurological
            physiotherapy and post-surgery recovery programs.
          </p>
        </div>


        {/* Doctor 3 */}

        <div className="card">
          {/* <img src={shalini} alt="Dr Shalini" className="doctor-img"/> */}

          <h2>Dr. A. Shalini</h2>
          <p className="role">Physiotherapist</p>

          <p><FaBookOpen className="icon green"/> BPT</p>
          <p><FaAward className="icon purple"/> Women’s Health & Geriatric Care</p>
          <p><FaCalendarAlt className="icon orange"/> 5+ Years Experience</p>

          <p className="desc">
            Focuses on women's health physiotherapy, prenatal and postnatal
            care, and geriatric rehabilitation.
          </p>
        </div>


        {/* Doctor 4 */}

        <div className="card">
          {/* <img src={shantikumar} alt="Dr Shanti Kumar" className="doctor-img"/> */}

          <h2>Dr. M. Shanti Kumar</h2>
          <p className="role">Physiotherapist</p>

          <p><FaBookOpen className="icon green"/> BPT</p>
          <p><FaAward className="icon purple"/> Cardiopulmonary & Home Visit Care</p>
          <p><FaCalendarAlt className="icon orange"/> 6+ Years Experience</p>

          <p className="desc">
            Specialized in cardiopulmonary rehabilitation and providing
            quality home visit physiotherapy services across Salem.
          </p>
        </div>

      </div>

    </section>
  );
}

export default DoctorsPage;