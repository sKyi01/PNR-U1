import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { CartProvider } from "./pages/CartContext"; // Replace with the correct path

import Loading from "./pages/Loading";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Product from "./pages/product";
import Gallery from "./pages/gallery";
import About from "./pages/About";
import Admin from "./pages/Admin";
import ProductCard from "./pages/ProductCard";
import CheckoutForm from "./pages/CheckoutForm";
import Layout from "./constants/Layout";
import Cart from "./pages/Cart";
import InquiryForm from "./pages/InquiryForm";
import ThankYouCard from "./pages/ThankYouCard";
import OrderSubmitted from "./pages/OrderSubmitted";
import ErrorBoundary from "./pages/ErrorBoundary";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay, replace with actual loading logic
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = "Are you sure you want to leave?";
      event.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <BrowserRouter>
    <CartProvider>
      <ErrorBoundary>
        <Layout>
         
            {isLoading ? (
              <Loading />
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/productCard/:productId"
                  element={<ProductCard />}
                />
                <Route path="/checkoutForm" element={<CheckoutForm />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/inquiryForm" element={<InquiryForm />} />
                <Route path="/thankyouCard" element={<ThankYouCard />} />
                <Route path="/orderSubmitted" element={<OrderSubmitted />} />

                <Route path="/admin/ed95016e28f7b01278b04b29c86e3680559ac0a53c707b4fbdd62f37da5017a8" element={<Admin />} />
                <Route path="/Product" element={<Product />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
              </Routes>
            )}
          
        </Layout>
      </ErrorBoundary>
    </CartProvider>
    </BrowserRouter>
  );
}
