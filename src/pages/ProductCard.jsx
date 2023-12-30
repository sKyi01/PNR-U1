import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../constants/Header';
import StaticCards from './StaticCards';
import Footer from '../constants/Footer';
import base_url from '../constants/NodeApi';
import { useCart } from "../pages/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link} from 'react-router-dom'
import gcp_url from '../constants/GcpPath';

const ProductCard = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const { cart, addToCart } = useCart();

  useEffect(() => {
    // Fetch the product data based on the productId
    axios.get(`${base_url}/getProduct/${productId}`).then(
      (response) => {
        setProduct(response.data);
        console.log('Fetched product:', response.data);
        // Check if the product is already in the cart
        const productInCart = cart.find(item => item.productId === response.data.productId);
        if (productInCart) {
          setAddedToCart(true);
        }
      },
      (error) => {
        console.error('Failed to fetch product:', error);
      }
    );
  }, [productId, cart]);

  const handleSmallImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(true);

    toast.success(`${product.productTitle} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      style: {
        background: "#333",
        color: "#fff",
      },
      className: "toast-custom",
    });
  };

  return (
    <div>
      <Header />
      <div className='container-fluid mt-4 d-flex flex-column justify-content-center align-items-center'>
        <div className='container mt-4'>
          <div className='card mb-3'>
            <div className='row g-0'>
              <div className='col-md-2 d-flex flex-column align-items-center'>
                {/* Four Small Images */}
                {product?.productImage?.map((image, index) => (
                  <div
                    key={index}
                    className={`mb-2 small-image ${index === selectedImage ? 'selected' : ''}`}
                    onClick={() => handleSmallImageClick(index)}
                  >
                    <img
                      style={{ width: '150px', height: '150px' }}
                      src={`${image}`}
                      className='img-fluid rounded mt-2 hover-pointer'
                      alt={`Image ${index + 1}`}
                      
                    />
                  </div>
                ))}
              </div>
              <div className='col-md-5 d-flex justify-content-center align-items-center'>
                {/* Main Single Image */}
                <div className='container' style={{ width: '200%', height: '400px', overflow: 'hidden' }}>
                {product.productImage && product.productImage.length > 0 && (
                  <img
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    src={`${product.productImage[selectedImage]}`}
                    className='img-fluid rounded main-image'
                    alt='Main Image'
                  />
                )}
              </div>
              </div>
              <div className='col-md-5'>
                {/* Text Content */}
                <div className='card-body d-flex flex-column'>
                  <h2 className='card-title font-weight-bold text-3xl mb-4' style={{fontSize:"30px",fontFamily: "Times New Roman"}}>{product.productTitle}</h2>
                  <div className='mb-3'>
                  <p style={{ fontSize: '1rem', fontWeight: 'normal',color:"#28B463"}}><b>{product.productAvailability}</b></p>
                </div>
                  
                  <div className='mb-3'>
                    <p style={{ fontSize: '1rem', fontWeight: 'normal',color:"GrayText"}}><b>PID#</b>{product.productId}</p>
                  </div>
                  <div className='mb-3'>
                    <h4 className='font-weight-bold text-xl' style={{fontSize:"15px",fontFamily:"monospace"}}>{product.productSubTitle}</h4>
                    <p className='font-weight-normal text-lg'></p>
                  </div>
                  <div className='mb-3 flex-grow-1'>
                    <p className='font-weight-normal'>{product.productDescription}</p>
                  </div>
                  
                  <div className="purchase-button-container">
                    <button
                      className={`bg-blue-500 text-white p-2 rounded ${addedToCart ? 'added' : ''}`}
                      onClick={() => handleAddToCart(product)}
                      disabled={addedToCart}
                    >
                      {addedToCart ? 'Added' : 'Add to Cart'}
                    </button>
                 
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
      <Link to="/product" className="btn btn-secondary btn-lg">
        Continue Shopping...
      </Link>
    </div>
      <div className=' mt-5'>
        <StaticCards />
        <Footer />
      </div>
      
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
