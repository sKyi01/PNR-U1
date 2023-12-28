import { useState } from "react";
import logo from "../assets/PNR/logopsr.png";
import line from "../assets/line.svg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import indiabg from "../assets/PNR/foest_psr.jpg";
import "../css/globalcss.css"

function India() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' for an instant scroll
    });
  }
  scrollToTop();
  return (
    <>
      <Header />
      <OurDestinations />
    </>
  );
}

function Header() {
  const handleCallClick = () => {
    // Use the `window.location` to initiate a phone call to the mobile number
    window.location.href = "tel:+917012862639"; // Replace with the desired mobile number
  };

  const handleEmailClick = () => {
    // Use the `window.location` to open the default email client
    window.location.href = "mailto:pnrwood82@gmail.com"; // Replace with the desired email address
  };

  const handleDestinationsClick = () => {
    // Use the `window.location` to open the default email client
    window.location.href = "/forms"; // Replace with the desired email address
  };
  const [enquire, setEnquire] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <Parallax
      strength={500}
      bgImageStyle={{
        objectFit: "cover",
        width: "100%",
        height: "100vh",
        // Apply the style only for mobile screens (max-width: 767px)
        "@media (max-width: 767px)": {
          objectFit: "cover",
          height: "100vh",
        },
      }}
      bgImage={indiabg}
      className="relative flex flex-col font-primary min-h-screen bg-[#1B1A1A]"
    >
      <nav className="hidden pr-6 md:flex items-center justify-between w-full">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="flex gap-24 font-bold text-xl text-white">
              <Link to="/">HOME</Link>
              <Link to="/about">ABOUT US</Link>
              <Link to="/product">OUR PRODUCTS</Link>
              <Link to="/services">OUR SERVICES</Link>
              <Link to="/gallery">TIMBERS</Link>
              <Link to="/cart" className="">
              View Cart
            </Link>
        </div>

        <div
          onClick={() => setEnquire(!enquire)}
          className="text-white flex gap-2 relative"
        >
          <button>ENQUIRE NOW</button>
          <img src={line} alt="" />

          <div
            className={
              enquire
                ? "absolute top-16 h-f w-full bg-white text-black p-4 flex flex-col gap-3 translate-y-0 duration-200"
                : "absolute flex top-16 h-f w-full bg-white text-black p-4 flex-col gap-3 -translate-y-12 duration-200 -z-10"
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
          <i
            onClick={() => setNav(true)}
            className="fa-solid fa-bars text-4xl text-white"
          ></i>
        </div>
        <div
          className={`${
            nav ? "translate-x-0" : "translate-x-full"
          } duration-150 absolute top-0 w-full bg-black h-screen text-white justify-center px-12 py-8`}
        >
          <div className="w-full flex justify-end">
            <i
              onClick={() => setNav(false)}
              className="fa-solid fa-x text-xl"
            ></i>
          </div>

          <div className="flex flex-col gap-5 items-center text-2xl py-8 h-full">
              <Link to="/">HOME</Link>
              <Link to="/about">ABOUT US</Link>
              <Link to="/product">OUR PRODUCTS</Link>
              <Link to="/services">OUR SERVICES</Link>
              <Link to="/gallery">TIMBERS</Link>
              <Link to="/cart" className="">
              View Cart
            </Link>

            <div
              onClick={() => setEnquire(!enquire)}
              className="text-white flex gap-2 relative"
            >
            <Link to="/checkoutForm">
              <button>ENQUIRE NOW</button>
               </Link>
              <img src={line} alt="" />

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

      <div className="md:flex hidden h-[80vh] items-center justify-center font-urbanist w-full text-xl">
        <h1 className="india-font pl-24 ">TIMBERS</h1>
      </div>
    </Parallax>
  );
}

function OurDestinations() {
  const destinations = [
    {
      name: "Kerala Teak Wood",
      imageUrl:
        "https://drive.google.com/uc?export=download&id=1FSla1JsjBle11O03plRFXRFl8Z-AY-4N",
      location: "Kerala, India, South Asia", 
      
    },
    {
      name: "Kerala Neam Wood",
      imageUrl:
        "https://drive.google.com/uc?export=download&id=1FSla1JsjBle11O03plRFXRFl8Z-AY-4N",
      location: "Kerala, India, South Asia",
      
    },
    {
      name: "Kerala Teak Wood",
      imageUrl:
        "https://drive.google.com/uc?export=download&id=1FSla1JsjBle11O03plRFXRFl8Z-AY-4N",
      location: "Kerala, India, South Asia",
      
    },
    {
      name: "Kerala Neam Wood",
      imageUrl:
        "https://drive.google.com/uc?export=download&id=1FSla1JsjBle11O03plRFXRFl8Z-AY-4N",
      location: "Kerala, India, South Asia",
      
    },
    {
      name: "Kerala Teak Wood",
      imageUrl:
        "https://drive.google.com/uc?export=download&id=1FSla1JsjBle11O03plRFXRFl8Z-AY-4N",
      location: "Kerala, India, South Asia",
      
    },
    {
      name: "Kerala Neam Wood",
      imageUrl:
        "https://drive.google.com/uc?export=download&id=1FSla1JsjBle11O03plRFXRFl8Z-AY-4N",
      location: "Kerala, India, South Asia",
      
    },
    {
      name: "Kerala Teak Wood",
      imageUrl:
        "https://drive.google.com/uc?export=download&id=1FSla1JsjBle11O03plRFXRFl8Z-AY-4N",
      location: "Kerala, India, South Asia",
     
    },
    {
      name: "Kerala Neam Wood",
      imageUrl:
        "https://drive.google.com/uc?export=download&id=1FSla1JsjBle11O03plRFXRFl8Z-AY-4N",
      location: "Kerala, India, South Asia",
      
    },
  ];

  return (
    <div
      name="kenya"
      className="my-12 flex flex-col items-center justify-center text-black gap-12"
    >
      <p className="text-6xl bursh-font">Our Timbers</p>
      <p className="india-font-1 font-urbanist text-2xl text-center pl-4">
        
      </p>

      <div className="grid md:grid-cols-2 place-items-center w-full mt-10 gap-12 px-6 md:px-0">
        {destinations.map((destination, index) => (
          <div key={index}>
          <Link
             to={destination.url}
             key={index}
             className={`md:flex hidden flex-col w-[500px] h-[500px] bg-white ${
               index % 2 === 0 ? "" : ""
             } overflow-hidden drop-shadow-xl link-style`}
           >
             <img
               src={destination.imageUrl}
               alt="placeholder"
               className={`${
                 index % 2 === 0 ? "rounded" : "rounded"
               } min-h-[70%] w-full`}
             />
             <div className="p-4 flex flex-col justify-evenly h-full">
               <p className="text-black font-bold text-lg">{destination.name}</p>
               <p className="text-black">{destination.location}</p>
             </div>
          </Link>

          <Link
            to={destination.url}
            key={index}
            className={`md:hidden flex flex-col w-full bg-white  drop-shadow-xl`}
          >
            <img
              src={destination.imageUrl}
              alt="placeholder"
              className={`rounded-t-xl min-h-[70%] w-full`}
            />
            <div className="p-4 flex flex-col justify-evenly h-full">
              <p className="text-black font-bold text-lg">
                {destination.name}
              </p>
              <p className="text-black">{destination.location}</p>
            </div>
          </Link>
        </div>
        ))}
      </div>
    </div>
  );
}

export default India;
