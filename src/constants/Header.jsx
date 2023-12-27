import { useState } from "react";
import logo from "../assets/PNR/logopsr.png";
import line from "../assets/line.svg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Footer from "./Footer";


function Header() {
  const handleCallClick = () => {
    window.location.href = "tel:+918883226229";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:angantrayabirdseye@gmail.com";
  };

  const handleDestinationsClick = () => {
    window.location.href = "/forms";
  };

  const [enquire, setEnquire] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <Parallax strength={500} className="relative flex flex-col font-primary bg-white">
      <nav className="hidden pr-6 md:flex items-center justify-between w-full">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="flex gap-24 font-bold text-xl text-black ">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/product">OUR PRODUCTS</Link>
          <Link to="/services">OUR SERVICES</Link>
          <Link to="/gallery">TIMBERS</Link>
          <Link to="/cart" className="text-black">
          View Cart
        </Link>
        </div>

        <div onClick={() => setEnquire(!enquire)} className="text-black  flex gap-2 relative">
          <button>ENQUIRE NOW</button>
          <div className="flex items-center">
            <img src={line} alt="line1" />
          </div>

          <div
            className={
              enquire
                ? "absolute top-16 h-f w-full bg-black text-white p-4 flex flex-col gap-3 translate-y-0 duration-200 z-20"
                : "absolute flex top-16 h-f w-full bg-white text-white p-4 flex-col gap-3 -translate-y-12 duration-200 -z-10"
            }
          >
          <Link to="/inquiryForm">
          <button >Book Online</button>
          </Link>
          <button onClick={handleEmailClick}>By Email</button>
          <button onClick={handleCallClick}>By Phone</button>
          </div>
        </div>
      </nav>

      <nav className="flex justify-between items-center md:hidden relative z-10">
        <Link to="/">
          <img className="w-32" src={logo} alt="Logo" />
        </Link>

        <div className="px-3">
          <i onClick={() => setNav(true)} className="fa-solid fa-bars text-4xl md:text-white"></i>
        </div>
        <div
          className={`${
            nav ? "translate-x-0" : "translate-x-full"
          } duration-150 absolute top-0 w-full bg-black h-screen text-white justify-center px-12 py-8`}
        >
          <div className="w-full flex justify-end">
            <i onClick={() => setNav(false)} className="fa-solid fa-x text-xl"></i>
          </div>

          <div className="flex flex-col gap-5 items-center text-2xl py-8 h-full">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT US</Link>
            <Link to="/product">OUR PRODUCTS</Link>
            <Link to="/services">OUR SERVICES</Link>
            <Link to="/gallery">TIMBERS</Link>
            <Link to="/cart" className="text-black">
            View Cart
          </Link>
            <div
              onClick={() => setEnquire(!enquire)}
              className="text-white flex gap-2 relative"
            >
              <button>ENQUIRE NOW</button>
              <img src={line} alt="line" />

              <div
                className={
                  enquire
                    ? "absolute top-16 h-f w-full bg-white text-black p-4 flex flex-col gap-3 translate-y-0 duration-200"
                    : "absolute top-16 h-f w-full bg-white text-black p-4 hidden flex-col gap-3 -translate-y-12 duration-200 -z-10"
                }
              >
              <Link to="/inquiryForm">
              <button >Book Online</button>
              </Link>
              <button onClick={handleEmailClick}>By Email</button>
              <button onClick={handleCallClick}>By Phone</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      

     
    </Parallax>
  );
}

export default Header;
