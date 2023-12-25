import React from "react";
import logo from "../assets/psr/logopsr.png";
import line from "../assets/line.svg";
import work from "../assets/psr/wood11.svg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
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

import { useState } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import "../css/globalcss.css";

const StaticCards = () => {
  return (
    <div>
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
              to=""
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
    </div>
  );
};

export default StaticCards;
