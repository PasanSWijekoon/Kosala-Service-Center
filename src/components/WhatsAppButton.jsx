import React from 'react';
import '../assets/css/whatsapp.css';

const WhatsAppButton = () => {
  const phoneNumber = "94775775353";
  const message = "Hello! I would like to inquire about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
