// WhatsAppButton.js
import React from 'react';

import "../css/globalcss.css"
import wmg from '../assets/whatsapp.png'

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-button">
    <a
      href="https://wa.me/7012862639"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={wmg} alt="WhatsApp" />
    </a>
  </div>
  
  );
};

export default WhatsAppButton;
