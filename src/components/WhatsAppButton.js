import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919345243443"
      className="whatsapp"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp size={28}  />
      💬
    </a>
  );
}

export default WhatsAppButton;