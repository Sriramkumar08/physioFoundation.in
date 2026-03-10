import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import DoctorsPage from "./pages/DoctorsPage";
import ServicesPage from "./pages/ServicesPage";
import AwardsPage from "./pages/AwardsPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";


function App() {
  return (
    <Router>
      <Helmet>
        <title>Best Physiotherapist in Salem | Physio Foundation</title>
        <meta
          name="description"
          content="Physio Foundation is a 5-star rated 24 Hours Physio Clinic in Salem offering pain relief treatment."
        />
      </Helmet>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;