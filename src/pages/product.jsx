import { useState, useEffect } from "react";
import logo from "../assets/psr/logopsr.png";
import line1 from "../assets/line1.png";
import line from "../assets/line.svg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Footer from "../constants/Footer";
import base_url from "../constants/NodeApi";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../constants/Header";
import StaticCards from "./StaticCards";
import "../css/globalcss.css";
import Layout from "../constants/Layout";
import imgPath from "../constants/ImgPath";
import gcp_url from "../constants/GcpPath";

function product() {
  const [products, setProducts] = useState([]);

  // function to call api method
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/getAllProduct`).then(
      (response) => {
       

        setProducts(response.data);
        console.log("Fetched products:", response.data);
      },
      (error) => {
        toast.error("Something went wrong", { position: "bottom-center" });
      }
    );
  };

  useEffect(() => {
    getAllCoursesFromServer();
  }, []); // Empty dependency array to run the effect only once

  // Log the updated state inside the useEffect hook
  useEffect(() => {
    console.log("Updated state : ", products);
  }, [products]);

  /*this is main products card */

  return (
   
    <div>
   <Header/>
    <div className="" >

  <div className="container text-center  font-brush-script-mt text-6xl mb-5">
  <p className="text-6xl bursh-font">Our Products</p>

</div>


  <div className="flex flex-col min-h-screen bg-[#b9b3b324] md:px-20 py-24 justify-around">
    <div className="">
      <div className="row">
        {Array.isArray(products) &&
          products.map((product, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className="md:hover:scale-110 cursor-pointer duration-150 w-[400px] h-[600px] w-80 rounded-xl bg-white shadow-lg flex-col"
                style={{
                  padding: "0px", // Adjust padding as needed
                  margin: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Link
                  to={`/productCard/${product._id}`}
                  className="link-style"
                  style={{ flex: "1", overflow: "hidden" }}
                >
                  <div
                    className="h-[60%] w-full rounded-t-xl"
                    style={{
                      backgroundImage: `url(https://storage.googleapis.com/pnr-vercel/${product.productImage[0]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  />
                  <div className="flex flex-col p-12 gap-7" style={{ overflow: "hidden" }}>
                    <h5 className="font-bold font-adanda text-2xl overflow-hidden">
                      {product.productTitle}
                    </h5>
                    <p className="font-adanda overflow-hidden" style={{ flex: "1" }}>
                      {product.productDescription.length > 100
                        ? `${product.productDescription.substring(0, 100)}...`
                        : product.productDescription}
                    </p>
                    {product.productDescription.length > 100 && (
                      <div className="text-black-500 cursor-pointer hover:underline">
                        See More
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
  <Footer />
</div>
</div>


  

  
  );
}

export default product;