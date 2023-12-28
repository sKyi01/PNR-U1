import { useState } from "react";
import logo from "../assets/PNR/logopsr.png";
import line1 from "../assets/line1.png";
import line from "../assets/line.svg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Footer from "../constants/Footer";
import wooden_flooring from "../assets/wooden_flooring.jpg";
import wooden_staircase from "../assets/Wooden_staircase.jpg";

const destinationsData = [
  {
    title: "Wooden Flooring",
    description:
      "Crafting bespoke wooden staircases that combine functionality and aesthetics. Our company specializes in creating custom staircases tailored to individual preferences and space requirements. From traditional to contemporary designs, our skilled craftsmen use high-quality wood to construct durable and visually stunning staircases, adding a touch of elegance to any home or commercial space.",

    imageUrl:
      wooden_flooring,
  },
  {
    title: "Wooden Staircase",
    description:
      "Discover the timeless allure of our wooden flooring, meticulously curated to infuse your space with natural elegance. Crafted from premium hardwoods, each plank embodies exquisite craftsmanship and durability, celebrating the unique beauty of wood grains. With a diverse selection spanning classic oak, inviting cherry, and opulent maple, our collection caters to diverse tastes and styles. Embrace enduring sophistication that withstands the demands of daily life, whether adorning a cozy home or a bustling commercial environment. Not only does our flooring promise timeless appeal, but it also boasts ease of maintenance, offering a practical solution without compromising on its innate charm.",
    imageUrl:
    wooden_staircase,
  },
  {
    title: "Custom Wood Furniture",
    description:
      "We pride ourselves on handcrafting unique and custom wood furniture pieces. Our skilled artisans create bespoke furniture tailored to specific design preferences and space requirements. Using premium quality wood and exquisite craftsmanship, we offer a wide range of custom tables, chairs, cabinets, and more, ensuring each piece is a blend of artistry and functionality.",
    imageUrl:
      "https://shagunarts.com/media/wysiwyg/custome-furniture.jpg",
  },
  {
    title: "Wooden Wall Paneling",
    description:
      "Revitalize interiors with our wooden wall paneling services. We offer an array of decorative and functional wood panels that add warmth and texture to any space. From intricate designs to sleek modern finishes, our paneling options cater to diverse design preferences, providing both visual appeal and insulation benefits.",
    imageUrl:
      "https://housing.com/news/wp-content/uploads/2022/11/wooden-panel-for-wall-compressed.jpg",
  },
  {
    title: "Wood Carving",
    description:
      "Delve into the timeless artistry of wooden carving, where craftsmanship meets imagination. Our skilled artisans meticulously sculpt intricate designs and patterns, breathing life into wood. From ornate details on furniture to personalized accents, each piece embodies the dedication and precision of our carving expertise. Experience the allure of meticulously crafted wooden creations that evoke elegance and individuality.",
    imageUrl:
      "https://thumbs.dreamstime.com/b/engraving-wood-17104950.jpg",
  },
  {
    title: "Wooden Beams and Structural Elements",
    description:
      "Provide structural strength and visual appeal with our wooden beams and structural elements. Our company supplies high-quality wood beams and components for architectural and construction purposes. From exposed beams in residential spaces to structural elements in commercial buildings, we offer durable and aesthetically pleasing wooden solutions.",
    imageUrl:
      "https://www.constructiondb.com/wp-content/uploads/2023/03/pexels-ron-lach-8829869-1024x682.jpg",
  },
  {
    title: "Wood Restoration and Refinishing",
    description:
      "Restore the beauty of aged or worn-out wooden surfaces with our restoration and refinishing services. Our team specializes in refurbishing old furniture, floors, and fixtures. Through sanding, staining, and refinishing techniques, we breathe new life into wood, preserving its natural beauty while ensuring longevity and enhanced aesthetics",
    imageUrl:
      "https://aaronstouchup.com/wp-content/uploads/2017/10/atu-furniture-refinishing-dining-room.png",
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
              <button>Book Online</button>
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
                  <button>Book Online</button>
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
