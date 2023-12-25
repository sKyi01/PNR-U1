import React from 'react';
import Header from '../constants/Header';
import Footer from '../constants/Footer';

const ThankYouCard = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid d-flex justify-content-center align-items-center"  style={{ border: '2px solid black', borderRadius: '15px', padding: '20px',minHeight: '60vh' }}>
        <div className="card text-center border" style={{ width: '1000px' }}>
          <div className="card-body">
            <p className="h3">
              <strong style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' ,fontSize:"70px"}}>
                Thank you for your inquiry! We will get back to you soon...
              </strong>
            </p>
            {/* You can customize the content further if needed */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouCard;
