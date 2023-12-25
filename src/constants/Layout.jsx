// Layout.js
import React from 'react';
import WhatsAppButton from './WhatsAppButton'; 

const Layout = ({ children }) => {
  return (
    <div>
    
      {children}
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
