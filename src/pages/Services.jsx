import { useState } from "react";
import logo from "../assets/psr/logopsr.png";
import line1 from "../assets/line1.png";
import line from "../assets/line.svg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Footer from "../constants/Footer";

const destinationsData = [
  {
    title: "Wooden Flooring",
    description:
      "Discover the timeless allure of our wooden flooring, meticulously curated to infuse your space with natural elegance. Crafted from premium hardwoods, each plank embodies exquisite craftsmanship and durability, celebrating the unique beauty of wood grains. With a diverse selection spanning classic oak, inviting cherry, and opulent maple, our collection caters to diverse tastes and styles. Embrace enduring sophistication that withstands the demands of daily life, whether adorning a cozy home or a bustling commercial environment. Not only does our flooring promise timeless appeal, but it also boasts ease of maintenance, offering a practical solution without compromising on its innate charm.",
    imageUrl:
      "https://media.istockphoto.com/id/905636222/photo/seamless-wood-floor-texture-hardwood-floor-texture-wooden-parquet.webp?b=1&s=170667a&w=0&k=20&c=evK4dMPGtWF5TLzRzvEzo907SO71OriDTp7EH3VLrYE=",
  },
  {
    title: "Wooden Flooring",
    description:
      "Discover the timeless allure of our wooden flooring, meticulously curated to infuse your space with natural elegance. Crafted from premium hardwoods, each plank embodies exquisite craftsmanship and durability, celebrating the unique beauty of wood grains. With a diverse selection spanning classic oak, inviting cherry, and opulent maple, our collection caters to diverse tastes and styles. Embrace enduring sophistication that withstands the demands of daily life, whether adorning a cozy home or a bustling commercial environment. Not only does our flooring promise timeless appeal, but it also boasts ease of maintenance, offering a practical solution without compromising on its innate charm.",
    imageUrl:
      "https://media.istockphoto.com/id/905636222/photo/seamless-wood-floor-texture-hardwood-floor-texture-wooden-parquet.webp?b=1&s=170667a&w=0&k=20&c=evK4dMPGtWF5TLzRzvEzo907SO71OriDTp7EH3VLrYE=",
  },
  {
    title: "Wooden Flooring",
    description:
      "Discover the timeless allure of our wooden flooring, meticulously curated to infuse your space with natural elegance. Crafted from premium hardwoods, each plank embodies exquisite craftsmanship and durability, celebrating the unique beauty of wood grains. With a diverse selection spanning classic oak, inviting cherry, and opulent maple, our collection caters to diverse tastes and styles. Embrace enduring sophistication that withstands the demands of daily life, whether adorning a cozy home or a bustling commercial environment. Not only does our flooring promise timeless appeal, but it also boasts ease of maintenance, offering a practical solution without compromising on its innate charm.",
    imageUrl:
      "https://media.istockphoto.com/id/905636222/photo/seamless-wood-floor-texture-hardwood-floor-texture-wooden-parquet.webp?b=1&s=170667a&w=0&k=20&c=evK4dMPGtWF5TLzRzvEzo907SO71OriDTp7EH3VLrYE=",
  },
  {
    title: "Wooden Flooring",
    description:
      "Discover the timeless allure of our wooden flooring, meticulously curated to infuse your space with natural elegance. Crafted from premium hardwoods, each plank embodies exquisite craftsmanship and durability, celebrating the unique beauty of wood grains. With a diverse selection spanning classic oak, inviting cherry, and opulent maple, our collection caters to diverse tastes and styles. Embrace enduring sophistication that withstands the demands of daily life, whether adorning a cozy home or a bustling commercial environment. Not only does our flooring promise timeless appeal, but it also boasts ease of maintenance, offering a practical solution without compromising on its innate charm.",
    imageUrl:
      "https://media.istockphoto.com/id/905636222/photo/seamless-wood-floor-texture-hardwood-floor-texture-wooden-parquet.webp?b=1&s=170667a&w=0&k=20&c=evK4dMPGtWF5TLzRzvEzo907SO71OriDTp7EH3VLrYE=",
  },
  {
    title: "Wooden Flooring",
    description:
      "Discover the timeless allure of our wooden flooring, meticulously curated to infuse your space with natural elegance. Crafted from premium hardwoods, each plank embodies exquisite craftsmanship and durability, celebrating the unique beauty of wood grains. With a diverse selection spanning classic oak, inviting cherry, and opulent maple, our collection caters to diverse tastes and styles. Embrace enduring sophistication that withstands the demands of daily life, whether adorning a cozy home or a bustling commercial environment. Not only does our flooring promise timeless appeal, but it also boasts ease of maintenance, offering a practical solution without compromising on its innate charm.",
    imageUrl:
      "https://media.istockphoto.com/id/905636222/photo/seamless-wood-floor-texture-hardwood-floor-texture-wooden-parquet.webp?b=1&s=170667a&w=0&k=20&c=evK4dMPGtWF5TLzRzvEzo907SO71OriDTp7EH3VLrYE=",
  },
  {
    title: "Wooden Flooring",
    description:
      "Discover the timeless allure of our wooden flooring, meticulously curated to infuse your space with natural elegance. Crafted from premium hardwoods, each plank embodies exquisite craftsmanship and durability, celebrating the unique beauty of wood grains. With a diverse selection spanning classic oak, inviting cherry, and opulent maple, our collection caters to diverse tastes and styles. Embrace enduring sophistication that withstands the demands of daily life, whether adorning a cozy home or a bustling commercial environment. Not only does our flooring promise timeless appeal, but it also boasts ease of maintenance, offering a practical solution without compromising on its innate charm.",
    imageUrl:
      "https://media.istockphoto.com/id/905636222/photo/seamless-wood-floor-texture-hardwood-floor-texture-wooden-parquet.webp?b=1&s=170667a&w=0&k=20&c=evK4dMPGtWF5TLzRzvEzo907SO71OriDTp7EH3VLrYE=",
  },
  
];

function Services() {
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
      <Footer />
    </>
  );
}

function Header() {
  const handleCallClick = () => {
    // Use the `window.location` to initiate a phone call to the mobile number
    window.location.href = "tel:+918883226229"; // Replace with the desired mobile number
  };

  const handleEmailClick = () => {
    // Use the `window.location` to open the default email client
    window.location.href = "mailto:angantrayabirdseye@gmail.com"; // Replace with the desired email address
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
      className="relative flex flex-col font-primary bg-white "
    >
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

        <div
          onClick={() => setEnquire(!enquire)}
          className="text-black  flex gap-2 relative"
        >
          <button>ENQUIRE NOW</button>
          <div className="flex items-center">
            <img src={line1} alt="line1" />
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
          <i
            onClick={() => setNav(true)}
            className="fa-solid fa-bars text-4xl md:text-white"
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

      <OurDestinations />
    </Parallax>
  );
}

function OurDestinations() {
  return (
    <div
      name="kenya"
      className="my-12 flex flex-col items-center justify-center text-black gap-12 z-0"
    >
      <p className="text-6xl bursh-font">Our Services</p>

      {destinationsData.map((item, index) => (
        <div
          key={index}
          className={`flex justify-around md:px-24 w-full px-6 ${
            index % 2 === 1
              ? "md:flex-row-reverse flex-col"
              : "md:flex-row flex-col"
          }`}
        >
          <div className="basis-[40%]">
            <img src={item.imageUrl} alt="placeholder" />
          </div>
          <div className="flex flex-col justify-evenly basis-[40%] my-4">
            <h4 className="font-primary text-4xl font-bold">{item.title}</h4>
            <p className="my-4">{item.description}</p>
            <div className="flex justify-center w-full">
              <Link
                to="/inquiryForm"
                className="py-4 px-8 font-adanda bg-black text-white my-4"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
