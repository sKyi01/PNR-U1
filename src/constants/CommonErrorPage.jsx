// CommonErrorPage.js

import React from 'react';
import Header from './Header';
import Footer from './Footer';

const CommonErrorPage = () => {
  return (
    <div>
    <Header/>
    <div className="container mt-5">
      <div className="card border-danger">
        <div className="card-header bg-danger text-white">Error</div>
        <div className="card-body">
          <h1 className="text-danger">Oops! Something went wrong.</h1>
          <p className="text-danger">
            We apologize for the inconvenience. Please try again later or contact support.
          </p>
          {/* You can add additional error information or instructions here */}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default CommonErrorPage;
