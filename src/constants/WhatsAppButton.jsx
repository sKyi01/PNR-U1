// WhatsAppButton.js
import React from 'react';

import "../css/globalcss.css"

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-button">
    <a
      href="https://wa.me/6380726258"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="../src/assets/whatsapp.png" alt="WhatsApp" />
    </a>
  </div>
  
  );
};

export default WhatsAppButton;
