import logo from "../assets/PNR/logopsr.png";
import line from "../assets/line.svg";
import work from "../assets/PNR/wood11.svg";
import img3 from "../assets/woodwork.jpg";
import img1 from "../assets/treehome.jpg";
import img2 from "../assets/working.jpg";
import location from "../assets/location.png";
import dots from "../assets/dots.svg";
import maplogo from "../assets/maplogo.svg";
import uparrow from "../assets/uparrow.png";
import booking from "../assets/booking.png";
import cloudy from "../assets/cloudy.png";
import destination from "../assets/destination.png";
import video from "../assets/psrvideo.mp4";

// import Reviews from "../constants/Reviews";
import Newsletter from "../constants/Newsletter";
import Footer from "../constants/Footer";
import WhatsAppButton from "../constants/WhatsAppButton";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import "../css/globalcss.css";

function Home() {
  return (
    <>
      <Header />
      <Explore />
      <Destinations />
      <Services />
      <TravelPoint />
      {/* <Reviews /> */}
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
}

function Header() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' for an instant scroll
    });
  }
  scrollToTop();
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
    <div className="h-screen relative">
      <Parallax
        strength={500}
        className="relative flex flex-col font-primary h-screen"
      >
        <video
          poster="https://www.telegraph.co.uk/content/dam/travel/2022/05/25/TELEMMGLPICT000297198535_trans_NvBQzQNjv4BqRo0U4xU-30oDveS4pXV-Vv4Xpit_DMGvdp2n7FDd82k.jpeg"
          id="background-video"
          className="object-cover"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>

        <nav className="hidden md:px-12 md:flex items-center justify-between w-full ">
          <Link to="/">
            <img className="md:w-auto w-44" src={logo} alt="Logo" />
          </Link>

          <div className="hidden md:flex gap-24 font-bold text-xl text-white">
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
                  : "absolute top-16 h-f w-full bg-white text-black p-4 flex flex-col gap-3 -translate-y-12 duration-200 -z-10"
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

        <nav className="flex justify-between items-center md:hidden relative">
          <Link to="/">
            <img
              className="w-32"
              width={350}
              height={350}
              src={logo}
              alt="Logo"
            />
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
                <button>ENQUIRE NOW</button>
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
      </Parallax>

      <div
        className="absolute inset-0 bg-[#0000004e]"
        style={{ zIndex: -1 }}
      ></div>
    </div>
  );
}

function Explore() {
  return (
    <section className="min-h-screen py-10 explore flex items-center flex-col md:flex-row md:text-left text-center w-auto md:min-w-[70%] mx-auto justify-around">
      <div className="flex flex-col gap-14 text-left">
        <div>
          <button className="p-4 px-7 font-bold rounded-full bg-white shadow-xl flex gap-4 ">
            <br />
            Explore the Wood!
            <img src={work} alt="work" />
          </button>
        </div>

        <h2 className="text-6xl font-adanda font-bold">
          The Best <br />
          <span className="text-[#B45F06]">Wood and Timbers</span> <br />{" "}
          <span className="text-[#00000]">in Palakkad</span> <br />
        </h2>

        <p className="text-xl">
          Where quality meets craftsmanship: <br className="hidden md:block" />
          Palakkad's finest selection of wood and Timbers
        </p>

        <div>
          <Link
            to="/product"
            className="px-6 text-white font-bold py-4 shadow-xl bg-[#B45F06] rounded-full mb-6 md:mb-0"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 explore-img">
        <div className="flex flex-col gap-8">
          <img className="hover:scale-105 duration-300" src={img2} alt={img2} />
          <img className="hover:scale-105 duration-300" src={img3} alt={img3} />
        </div>
        <div>
          <img className="hover:scale-105 duration-300" src={img1} alt={img1} />
          {/* <button className="-translate-y-[200%] translate-x-[100%] shadow-xl px-12 p-4 bg-white rounded-full z-10 flex gap-3 bg-[#B45F06] ">
            <img src={location} alt="location" />
            Top Selection
          </button> */}

          {/* <button className="h-12 w-12 bg-[#B45F06] rounded-full translate-x-[200%]">
            <i className="fa-solid fa-user-plus text-white"></i>
          </button> */}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section className="flex flex-col min-h-screen bg-[#b9b3b324] md:px-20 py-24 justify-around">
      <div className="flex justify-around">
        <div className="flex gap-12">
          <div className="hidden md:block">
            {/* <img src={dots} alt="stars" /> */}
          </div>
          <div className="flex flex-col gap-6">
            {/* <p className="text-lg text-[#B45F06] font-primary -[100px]">
              OUR PRODUCTS
            </p> */}
            <h1 className="text-4xl text-[#B45F06] font-primary ">
              OUR PRODUCTS
            </h1>
            <h2 className="text-xl font-bold">Explore Our Top Products</h2>
          </div>
        </div>

        <div>
          {/* generate left arrow in fontawesome */}
          <Link
            to="/s"
            className="cursor-pointer h-12 w-12 bg-[#B45F06] rounded-full flex items-center justify-center shadow-xl link-style"
          >
            <i className="fa-solid fa-chevron-right text-white"></i>
          </Link>
        </div>
      </div>

      <div className="my-6 grid grid-cols-1 md:grid-cols-4 mx-auto gap-24">
        {/* item 1 */}
        <Link
          to="/product"
          className="md:hover:scale-110 cursor-pointer duration-150 h-[500px] w-80 rounded-xl bg-white shadow-lg flex-col link-style"
        >
          <div className="h-[60%] w-full rounded-t-xl bg-img-homep1" />
          <div className="flex flex-col p-12 gap-7">
            <h3 className="font-bold font-adanda text-xl">
              Indian, Kerala Teak Wood Door
            </h3>
            <p className="font-adanda">Kerala Teak wood</p>
          </div>
        </Link>

        {/* item 2 */}
        <Link
          to="/product"
          className="md:hover:scale-110 cursor-pointer duration-150 h-[500px] w-80 rounded-xl bg-white shadow-lg flex-col link-style"
        >
          <div className="h-[60%] w-full rounded-t-xl bg-img-homep3" />
          <div className="flex flex-col p-12 gap-7">
            <h3 className="font-bold font-adanda text-xl">
              Wooden jaali made with Teak Wood
            </h3>
            <p className="font-adanda">Kerala Teak wood</p>
          </div>
        </Link>

        {/* item 3 */}
        <Link
          to="/product"
          className="md:hover:scale-110 duration-150 cursor-pointer h-[500px] w-80 rounded-xl bg-white shadow-lg flex-col link-style"
        >
          <div className="h-[60%] w-full rounded-t-xl bg-img-lakshadweep" />
          <div className="flex flex-col p-12 gap-7">
            <h3 className="font-bold font-adanda text-lg">
              Wooden Book Shelf made with Teak Wood
            </h3>
            <p className="font-adanda">Kerala Teak wood</p>
          </div>
        </Link>
        {/* item 3 */}
        <Link
          to="/product"
          className="md:hover:scale-110 duration-150 cursor-pointer h-[500px] w-80 rounded-xl bg-white shadow-lg flex-col link-style"
        >
          <div className="h-[60%] w-full rounded-t-xl bg-img-homep2" />
          <div className="flex flex-col p-12 gap-7">
            <h3 className="font-bold font-adanda text-lg">
              Neem Wood Dining Table
            </h3>
            <p className="font-adanda">Made with Neem Wood</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="px-4 md:px-20 min-h-[70vh] flex flex-col md:flex-row mt-12 md:mt-0 justify-between items-center ">
      <div className="text-left flex gap-7 ml-5">
        {/* <img className="hidden md:inline-block" src={uparrow} alt="uparrow" /> */}
        <div className="flex flex-col justify-around">
          <div className="flex justify-evenly items-center gap-20">
            <h4 className="tracking-widest uppercase text-4xl text-[#B45F06] font-bold">
              Services
            </h4>
            <Link
              to="/services"
              className="cursor-pointer h-12 w-12 bg-[#B45F06] rounded-full flex items-center justify-center shadow-xl"
            >
              <i className="fa-solid fa-chevron-right text-white"></i>
            </Link>
          </div>
          <p className="text-3xl font-bold">
            Our top value <br /> categories for you
          </p>
        </div>
      </div>

      <div className="h-[70vh] basis-[70%]  flex items-center">
        <Link to="/services" className="link-style">
          <div className="flex flex-col items-center justify-evenly px-6 h-full">
            <div className="grid mt-12 md:mt-0 md:grid-cols-3 gap-12 min-h-[70%]">
              <div className="flex flex-col bg-white drop-shadow-2xl hover:scale-110 duration-200 items-center p-6 md:p-12 rounded-3xl justify-evenly text-center">
                <div className="mb-12">
                  <img src={destination} alt="destination" />
                </div>
                <h6 className="font-bold text-3xl mb-3 text-[#B45F06]">
                  Global Exporting
                </h6>
                <p className="text-center text-xl">
                  our experted export network delivers
                  <br className="md:block hidden" /> premium wood and exquisite
                  furniture <br className="md:block hidden" />
                  to every corner of the globe.
                </p>
              </div>

              <div className="flex flex-col bg-white drop-shadow-2xl hover:scale-110 duration-200 items-center p-6 md:p-12 rounded-3xl justify-evenly text-center">
                <div className="mb-12">
                  <img src={booking} alt="booking" />
                </div>
                <h6 className="font-bold text-3xl mb-3 md:mb-0 text-[#B45F06]">
                  Easy Booking
                </h6>
                <p className="text-center text-xl ">
                  Effortless access to quality wood and furniture worldwide –
                  book with ease through PNR Wood and furnish your dreams
                  effortlessly.
                </p>
              </div>

              <div className="flex flex-col bg-white drop-shadow-2xl hover:scale-110 duration-200 items-center p-6 md:p-12 rounded-3xl justify-evenly text-center">
                <div className="mb-12">
                  <img src={cloudy} alt="cloudy" />
                </div>
                <h6 className="font-bold text-3xl mb-3 md:mb-0 text-[#B45F06]">
                  Weatherproof Wood
                </h6>
                <p className="text-center text-xl">
                  Experience top-quality wood and exquisite furniture crafted
                  for every weather, now available worldwide through PNR Wood.{" "}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
function TravelPoint() {
  return (
    <section className="min-h-screen md:my-28 md:mx-28 flex bg-map bg-white flex-col md:flex-row">
      <div className="flex flex-col px-6 md:px-24 py-20 justify-evenly text-left">
        <div className="mx-auto md:mx-0 flex items-center gap-5 px-8 py-2 rounded-full w-1/2">
          {/* generate map on font awesome */}
          {/* <img src={maplogo} alt="maplogo" /> */}
          {/* <p className="tracking-widest font-primary text-[#F5F4F4]">A paradise for wood lovers</p> */}
        </div>

        <div className="flex flex-col gap-12 md:w-[70%] text-left">
          <h2 className="text-xl font-bold tracking-[xl] text-xl text-[#F5F4F4]">
            WOODCRAFT HUB
          </h2>
          <h3 className="tracking-wider text-4xl md:text-6xl font-alfa text-[#F5F4F4]">
            Exploring the essence of craftsmanship.
          </h3>
          <p className="text-[#F5F4F4] text-xl">
            Uncover the perfect wood and timber solutions with our expert
            guidance, assisting you in discovering the ideal materials that
            transform your space into a home.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center basis-[80%]">
        <div className="grid gap-12 grid-cols-2 md:p-0 px-4">
          <div className="p-4 md:p-8 bg-white rounded-3xl flex flex-col items-center shadow-xl text-center">
            <p className="text-[#B45F06] text-4xl font-bold mb-4">200+</p>
            <p className="text-xl">WOOD TYPES</p>
          </div>

          <div className="p-4 md:p-8 bg-white rounded-3xl flex flex-col items-center shadow-xl text-center">
            <p className="text-[#B45F06] text-4xl font-bold mb-4">500+</p>
            <p className="text-xl">DESIGNS</p>
          </div>

          <div className="p-4 md:p-8 bg-white rounded-3xl flex flex-col items-center shadow-xl text-center">
            <p className="text-[#B45F06] text-4xl font-bold mb-4">50+</p>
            <p className="text-xl">INTERNATIONAL EXPORTS</p>
          </div>

          <div className="p-4 md:p-8 bg-white rounded-3xl flex flex-col items-center shadow-xl text-center">
            <p className="text-[#B45F06] text-4xl font-bold mb-4">12K+</p>
            <p className="text-xl">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
