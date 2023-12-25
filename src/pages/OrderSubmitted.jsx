import React from "react";
import Header from "../constants/Header";
import Footer from "../constants/Footer";

const OrderSubmitted = () => {
  return (
    <div>
      <Header />
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ border: '2px solid black', borderRadius: '15px', padding: '20px',minHeight: '60vh' }}
      >
        <div
          className="card text-center border"
          style={{ width: "1000px", padding: "20px", borderRadius: "15px" }}
        >
          <h1 className="font-weight-bold mb-4">Order Submitted!</h1>
          <div className="card-body">
            <p className="h3">
              <strong
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  fontSize: "30px",
                }}
              >
                Thanks for your order! We're processing it now. Expect a
                confirmation via phone or email shortly. Our support team may
                reach out for a seamless experience.
              </strong>
            </p>
            {/* You can customize the content further if needed */}
          </div>
        </div>
      </div>
      <div className="mt-5">
      <Footer />
      </div>
    </div>
  );
};

export default OrderSubmitted;
