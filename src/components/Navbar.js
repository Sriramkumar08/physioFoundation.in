import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="logo-section">
          <div className="logo-circle">
            <img src={logo} alt="Physio Foundation Logo" className="footer-logo" />
          </div>
          <div className="logo-text">
            <h2>Physio Foundation</h2>
            <p>Passion as profession</p>
          </div>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/doctors" onClick={() => setMenuOpen(false)}>Our Doctors</NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/awards" onClick={() => setMenuOpen(false)}>Awards</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </li>
          {/* <li className="mobile-buttons">
            <a href="tel:+916382871225" className="mobile-call" onClick={() => setMenuOpen(false)}>Call Now</a>
            <a href="https://wa.me/916382871225" className="mobile-whatsapp" onClick={() => setMenuOpen(false)}>WhatsApp</a>
          </li> */}
        </ul>

        <div className="nav-buttons">
          <a href="tel:+916382871225">
            <button className="call-btn">Call Now</button>
          </a>
          
        </div>

      </div>
    </header>
  );
}

export default Navbar;