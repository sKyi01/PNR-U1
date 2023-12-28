import React from "react";
import { useCart } from "./CartContext"; // Replace with the correct path
import Header from "../constants/Header";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Footer from "../constants/Footer";

const Cart = () => {
  const navigate = useNavigate(); // Change from useHistory to useNavigate
  const { cart, addToCart, removeFromCart, subtractQuantity } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleSubtractQuantity = (productId) => {
    subtractQuantity(productId);
  };

  const handlePurchase = () => {
  

    // Navigate to the checkoutForm page with cart and totalAmount as state
    navigate('/checkoutForm', { state: { cart: cart } });
  };

  // Calculate the total amount


  return (
    <div>
    <Header />
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3 align-items-center">
        <div>
          
        </div>
        <div>
          <button
            className='btn btn-success  mr-2'
            onClick={handlePurchase}
          >
            <FontAwesomeIcon icon={faShoppingBag} />
            Purchase the product
          </button>
          <Link to="/product" className="btn btn-primary ">
            Continue Shopping
          </Link>
        </div>
      </div>
      <h2 className="mb-4 bursh-font mt-5" style={{fontSize:"50px"}}>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="row">
          {cart.map((product) => (
            <div key={product._id} className="col-md-12 mb-4">
              <div className="card flex-md-row flex-sm-column ">
                {/* Left side - Image */}
                <img
                  src={`${product.productImage[0]}`}
                  alt={product.productTitle}
                  className="card-img-left img-fluid"
                  style={{ width: "400px", height: "400px", objectFit: "cover" }}
                />
                {/* Right side - Details */}
                <div className="card-body" style={{ flex: 1 }}>
                  <h4 className="card-title" style={{fontSize:"30px",fontFamily:"sans-serif"}}><b>{product.productTitle}</b></h4>
                 <div className="font-weight-bold" style={{fontSize:"15px",fontFamily:"monospace"}}>
                 {product.productSubTitle}
                 </div>
                  <p className="card-text mt-3">
                
                    {product.productDescription}
                  </p>
  
                  <div className="d-flex justify-content-between align-items-center mt-5">
                    <div className="d-flex">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleSubtractQuantity(product._id)}
                      >
                        -
                      </button>
                      <span className="mx-2">{product.quantity}</span>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleAddToCart(product)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveFromCart(product._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
  </div>
  
  );
};

export default Cart;
