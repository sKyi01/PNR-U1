import { useState, useEffect } from "react";
import logo from "../assets/PNR/logopsr.png";
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
import { debounce } from "lodash";


function product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const getAllCoursesFromServer = debounce(() => {
    setLoading(true); // Set loading to true when starting to fetch data
    axios.get(`${base_url}/getAllProduct`).then(
      (response) => {
        setProducts(response.data);
        setLoading(false);
        console.log("Fetched products:", response.data);
      },
      (error) => {
        toast.error("Something went wrong", { position: "bottom-center" });
        setLoading(false);
      }
    );
  }, 500);

  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  useEffect(() => {
    console.log("Updated state: ", products);
  }, [products]);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // User has scrolled to the bottom
      loadMoreItems();
    }
  }, 500);

  const loadMoreItems = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  /*this is main products card */

  return (
    <div>
    <Header />
    <div className="">
      <div className="container text-center font-brush-script-mt text-6xl mb-5">
        <p className="text-6xl bursh-font">Our Products</p>
      </div>
  
      <div className="flex flex-col min-h-screen px-4 md:px-10 lg:px-20 py-10 md:py-16 justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(products) &&
            products.map((product, index) => (
              <div key={index} className="mb-4">
                <div
                  className="md:hover:scale-110 cursor-pointer duration-150 w-full md:w-[400px] h-[600px] rounded-xl bg-white shadow-lg flex-col mx-auto"
                  style={{
                    padding: "0px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Link
                    to={`/productCard/${product._id}`}
                    className="link-style"
                    style={{ flex: "1", overflow: "hidden" }}
                  >
                    <div className="h-[60%] w-full rounded-t-xl">
                      <img
                        src={product.productImage[0]}
                        alt="Product Image"
                        className="w-full h-full object-cover rounded-t-xl img-fluid"
                      />
                    </div>
  
                    <div className="flex flex-col p-4 md:p-12 gap-4 md:gap-7" style={{ overflow: "hidden" }}>
                      <h5 className="font-bold font-adanda text-lg md:text-2xl overflow-hidden">
                        {product.productTitle}
                      </h5>
                      <p className="font-adanda text-sm md:text-base overflow-hidden" style={{ flex: "1" }}>
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
         {/* Loading Spinner */}
         {loading && <div className="loading-spinner"></div>}
         {/* Pagination */}
         <div className="pagination">
           {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, index) => (
             <button key={index} onClick={() => paginate(index + 1)}>
               {index + 1}
             </button>
           ))}
      </div>
      <Footer />
    </div>
  </div>
  </div>
  
  
  );
}

export default product;
