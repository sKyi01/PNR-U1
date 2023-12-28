import logo from "../assets/PNR/logopsr.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      {" "}
      <footer className="flex flex-col md:flex-row text-center mt-11 gap-6 md:gap-44">
        {" "}
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-col justify-between basis-[20%] gap-15">
          <p className="text-left">
          PNR Woods and Timbers stands as more than just a timber and wood shop. We transcend traditional labels – 
          we're not solely a supplier, but a destination for craftsmanship and quality. Much like a curator of stories etched in 
          timber grains, we blend expertise and efficiency. 

          </p>
          <div className="flex gap-5 justify-center md:justify-normal items-center mt-5 md:mt-0">
            <Link to="https://www.linkedin.com/company/psrwoods/">
              <i className="fa-brands fa-facebook-in p-3 bg-[#2596BE] rounded-full text-white"></i>
            </Link>
            <Link to="https://www.instagram.com/psrwoods">
              <i className="fa-brands fa-instagram p-3 bg-[#2596BE] rounded-full text-white"></i>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
          <div className="flex flex-col gap-3">
            <h6 className="font-bold text-xl">Company</h6>
            <div className="flex flex-col text-lg gap-3">
              <a href="/about">About Us</a>
            </div>
            <div className="flex flex-col text-lg gap-3">
              <a href="/services">Services</a>
            </div>
            <div className="flex flex-col text-lg gap-3">
              <a href="/product">Products</a>
            </div>
            <div className="flex flex-col text-lg gap-3">
              <a href="/gallery">Timbers</a>
            </div>
            
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="font-bold text-xl">Contact</h6>
            <div className="flex flex-col text-lg gap-3">
              <a href="/inquiryForm">Partner with us</a>
            </div>
            <div className="flex flex-col text-lg gap-3">
              <a href="mailto:pnrwood82@gmail.com">Careers</a>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-6">
            <h6 className="font-bold text-xl">Meet Us </h6> 
            
            <div className="flex flex-col text-lg gap-3">
            <a href="#">Kajahussain AR PNR WOOD INDUSTRIES PALAKKAD 678012<br/>  </a>

              <a href="tel:+917012862639">+91 7012862639 <br/> (24/7, 365 days) </a>
              <a href="mailto:pnrwood82@gmail.com">pnrwood82@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col gap-6">
          <h6 className="font-bold text-xl">Meet Us</h6>
          <div className="flex flex-col text-lg gap-3">
          <a href="#">Kajahussain AR PNR WOOD INDUSTRIES PALAKKAD 678012<br/>  </a>

          <a href="tel:+917012862639">+91 7012862639 <br/> (24/7, 365 days) </a>
          <a href="mailto:pnrwood82@gmail.com">pnrwood82@gmail.com</a>
          </div>
        </div>
      </footer>
      <div className="text-center font-recursive py-2">
        <p>
          Designed And Developed By{" "}
          <a href="https://midlead.com" className="text-[#2596BE]">
            MidLead
          </a>
          <br/>
        </p>
        
      </div>
      <div className="text-center font-recursive py-2">
      <p>© 2023 PNR Woods | All Rights Reserved. </p>
      </div>
    </div>
  );
}

export default Footer;
