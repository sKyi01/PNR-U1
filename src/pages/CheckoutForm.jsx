import React, { useState } from 'react';
import axios from 'axios'; // Make sure to import axios
import Header from '../constants/Header';
import Footer from '../constants/Footer';
import base_url from "../constants/NodeApi";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
const CheckoutForm = () => {
    const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const location=useLocation();
  console.log(location)

  const cartData = location.state.cart;
  console.log("Cart Product in Form"+cartData)
  const productNames = cartData.map((product) => product.productTitle).join(', ');



  const [formData, setFormData] = useState({
    selectedProduct: productNames,
   
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    streetAddress: '',
    companyName: '',
    states: '',
    countryRegion: '',
    orderNotes: '',
    shipToDifferentAddress: false,
  });

 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${base_url}/submit-order`, formData);

      if (response.status === 200) {
        console.log('Order submitted successfully!');
        toast.success('Order submitted successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          style: {
            background: '#333',
            color: '#fff',
          },
          className: 'toast-custom',
        });

        // Redirect to the OrderSubmitted page after successful submission
        navigate('/orderSubmitted');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form. Please try again later.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        style: {
          background: '#333',
          color: '#fff',
        },
        className: 'toast-custom',
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
    <Header />
    <div className="container mt-5" style={{ bottom: '200px'}}>
     
      <div className="container mt-5 mb-5" style={{ border: '2px solid black', borderRadius: '15px', padding: '20px' }}>
        <h1 className="text-center font-weight-bold mb-5" style={{ fontSize: '50px' }}>
          Fill The Details
        </h1>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="form-row mb-3">

              <div className="form-group col-md-12">
              <label htmlFor="productNames" className="font-weight-bold">
                Selected Products
              </label>
              <input
                name='selectedProduct'
                type="text"
                
                className="form-control"
                id="productNames"
                disabled
                value={cartData && cartData.map((product) => product.productTitle).join(', ')}
              />
            </div>
            

                
             
            
                <div className="form-group col-md-6">
                  <label htmlFor="firstName" className="font-weight-bold">First Name</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="firstName"
                    placeholder="Your first name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lastName" className="font-weight-bold">Last Name</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="lastName"
                    placeholder="Your last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row mb-3">
                <div className="form-group col-md-6">
                  <label htmlFor="phone" className="font-weight-bold">Phone</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="phone"
                    placeholder="Phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email" className="font-weight-bold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row mb-3">
                <div className="form-group col-md-6">
                  <label htmlFor="streetAddress" className="font-weight-bold">Street Address</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="streetAddress"
                    placeholder="Street Address"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="companyName" className="font-weight-bold">Company Name (optional)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyName"
                    placeholder="Company name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row mb-3">
                <div className="form-group col-md-6">
                  <label htmlFor="states" className="font-weight-bold">States</label>
                  <input
                    type="text"
                    id="states"
                    required
                    className="form-control"
                    placeholder="Enter state"
                    name="states"
                    value={formData.states}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="countryRegion" className="font-weight-bold">Country / Region</label>
                  <input
                    type="text"
                    id="countryRegion"
                    required
                    className="form-control"
                    placeholder="Enter country/region"
                    name="countryRegion"
                    value={formData.countryRegion}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="orderNotes" className="font-weight-bold">Order Notes (Optional)</label>
                <textarea
                  className="form-control"
                  id="orderNotes"
                  rows="4"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  name="orderNotes"
                  value={formData.orderNotes}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="shipToDifferentAddress"
                  name="shipToDifferentAddress"
                  checked={formData.shipToDifferentAddress}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="shipToDifferentAddress">Ship to a different address</label>
              </div>
              <div className="mt-5 mb-5 text-center">
              <button type="submit" className="btn btn-dark bg-dark text-white" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Order'}
            </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    <ToastContainer />

    </div>
  );
};

export default CheckoutForm;
