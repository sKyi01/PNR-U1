import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import base_url from "../constants/NodeApi";
import { format, parse } from 'date-fns';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [orders,setOrders]=useState([]);
  const [productListVisible, setProductListVisible] = useState(false);
  const [orderListVisible, setOrderListVisible] = useState(false); // New state
  const [loading, setLoading] = useState(false);


  const [updateProduct, setUpdateProduct] = useState({
    username: "",
    password: "",
    _id: "",
    productId: "",
    productTitle: "",
    productDescription: "",
    productSubTitle: "",
   
    productAvailability: "",
    productImage: [],
  });
  const [product, setProduct] = useState({
    username: "",
    password: "",
    productId: "",
    productTitle: "",
    productDescription: "",
    productSubTitle: "",
    

    productAvailability: "",
    productImage: [],
  });

  const [updateFormVisible, setUpdateFormVisible] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  const toggleProductListVisibility = () => {
    setProductListVisible(!productListVisible);
  };
   // New function to toggle order list visibility
   const toggleOrderListVisibility = () => {
    setOrderListVisible(!orderListVisible);
  };


  const handleCancelUpdate = () => {
    setUpdateFormVisible(false);
    // Optionally, you can reset the updateProduct state here if needed.
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${base_url}/getAllProduct`);
      console.log("product fetched", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${base_url}/getOrders`);
      setOrders(response.data);
      console.log("Orders fetched "+ response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    

    const formData = new FormData();
  
    for (const key in product) {
      if (key === "productImage") {
        for (let i = 0; i < product.productImage.length; i++) {
          formData.append(`productImage`, product.productImage[i]);

        }
      } else {
        formData.append(key, product[key]);
      }
    }
  
    try {
      await axios.post(`${base_url}/createProduct`, formData);
      toast.success("Product added successfully", {
        position: "bottom-center",
      });
      fetchProducts(); // Fetch updated product list
    } catch (error) {
      console.error("Failed to add product:", error);
      toast.error("Failed to add product", { position: "bottom-center" });
    }
    finally {
      setLoading(false);
    }
  };
  

  const handleDelete = async (productId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) {
      // If the user clicks "Cancel"
      console.log("Deletion canceled");
      toast.warning("deletion canceled");
      return;
    }

    const password = window.prompt("Enter your password:");

    if (!password) {
      console.log("Password not provided");
      toast.error("Password is not provided");
      return;
    }

    if (password !== "sky") {
      console.log("Incorrect password");
      toast.error("Incorrect Password");
      return;
    }
    console.log("check delete id " + productId);
    try {
      await axios.delete(`${base_url}/deleteProduct/${productId}`);
      toast.success("Product deleted successfully", {
        position: "bottom-center",
      });
      fetchProducts(); // Fetch updated product list
    } catch (error) {
      console.error("Failed to delete product:", error);
      toast.error("Failed to delete product", { position: "bottom-center" });
    }
  };

  const handleUpdate = (productId) => {
    setUpdateFormVisible(true);
    setSelectedProductId(productId);

    // Find the selected product in the products array
    const selectedProduct = products.find((p) => p.productId === productId);

    // Set the product state with the data of the selected product
    setUpdateProduct({
      username: "", // Add other fields as needed
      password: "",
      _id: selectedProduct._id, // Add other fields as needed
      productId: selectedProduct.productId,
      productTitle: selectedProduct.productTitle,
      productDescription: selectedProduct.productDescription,
      productSubTitle: selectedProduct.productSubTitle,
      

      productAvailability: selectedProduct.productAvailability,
      // Add other fields as needed
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
  
    for (const key in updateProduct) {
      if (key === "productImage") {
        // If it's a FileList (multiple files), loop through and append each file
        for (let i = 0; i < updateProduct.productImage.length; i++) {
          formData.append("productImage", updateProduct.productImage[i]);
        }
      } else {
        formData.append(key, updateProduct[key]);
      }
    }
  
    try {
      await axios.put(
        `${base_url}/updateProduct/${updateProduct._id}`,
        formData
      );
      toast.success("Product updated successfully", {
        position: "bottom-center",
      });
      setUpdateFormVisible(false);
      fetchProducts(); // Fetch updated product list
    } catch (error) {
      console.error("Failed to update product:", error);
      toast.error("Failed to update product", { position: "bottom-center" });
    }
    finally {
      setLoading(false);
    }
  };
  

  const handleFileChange = (e) => {
    setProduct({ ...product, productImage: e.target.files[0] });
  };

  const handleFileUpdateChange = (e) => {
    setUpdateProduct({ ...updateProduct, productImage: e.target.files[0] });
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="font-weight-bold">Admin Panel</h1>
      </div>
      <form onSubmit={handleForm} encType="multipart/form-data" method="POST">
        <div className="form-group">
          <label for="exampleInputUsername">Username</label>
          <input
            name="username"
            required
            type="text"
            className="form-control"
            id="username"
            aria-describedby="usernamelHelp"
            placeholder="Enter Your Username"
            onChange={(e) => {
              setProduct({ ...product, username: e.target.value });
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your username with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            name="password"
            required
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => {
              setProduct({ ...product, password: e.target.value });
            }}
          />
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Product Id</label>
          <input
            name="productId"
            type="text"
            required
            className="form-control"
            id="exampleInputproductId"
            aria-describedby="productIdlHelp"
            placeholder="Enter Product Id"
            onChange={(e) => {
              setProduct({ ...product, productId: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputproductTitle">Product Title</label>
          <input
            name="productTitle"
            type="text"
            required
            className="form-control"
            id="exampleproductTitle"
            aria-describedby="productTitleHelp"
            placeholder="Enter Product Title"
            onChange={(e) => {
              setProduct({ ...product, productTitle: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputproductDescription">
            Product Description
          </label>
          <textarea
            rows={5}
            cols={5}
            required
            name="productDescription"
            type="text"
            className="form-control"
            id="exampleInputproductDescription"
            aria-describedby="productDescriptionHelp"
            placeholder="Enter Product Description"
            onChange={(e) => {
              setProduct({ ...product, productDescription: e.target.value });
            }}
          />
        </div>

        <div className="form-group">
          <label for="exampleInputproductPrice">Product SubTitle</label>
          <input
            name="productSubTitle"
            type="text"
            required
            className="form-control"
            id="exampleproductPrice"
            aria-describedby="productPriceHelp"
            placeholder="Enter Product SubTitle"
            onChange={(e) => {
              setProduct({ ...product, productSubTitle: e.target.value });
            }}
          />
        </div>
       
        <div className="form-group">
          <label for="exampleInputproductTitle">Product Availability</label>
          <input
            name="productAvailability"
            required
            type="text"
            className="form-control"
            id="exampleproductAvailability"
            aria-describedby="productAvailabilityHelp"
            placeholder="Enter Product Availability"
            onChange={(e) => {
              setProduct({ ...product, productAvailability: e.target.value });
            }}
          />
        </div>

        <div className="input-group">
          <input
            name="productImage"
            type="file"
            className="form-control"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
            onChange={(e) => {
              setProduct({
                ...product,
                productImage: e.target.files,
              });
            }}
            multiple
          />

          <button
            class="btn btn-outline-secondary"
            type="button"
            id="inputGroupFileAddon04"
          >
            Button
          </button>
        </div>

        <div className="text-center mt-4 mb-4">
          <button type="submit" className="btn btn-primary bg-primary" disabled={loading}>

          
          {loading ? 'Adding...' : 'Add Product'}
        
            
          </button>
        </div>
      </form>
      <button
        className="btn btn-info mt-3"
        onClick={toggleProductListVisibility}
      >
        {productListVisible ? "Hide Product List" : "View Product List"}
      </button>

      {productListVisible && (
        <div>
          <h2 className="mt-4">Product List</h2>
          <table className="table table-striped">
            <thead>
              <tr>
              <th>Sr.No</th>

                <th>UPID</th>
                <th>Product ID</th>
                <th>Product Title</th>
                <th>Product Description</th>
                <th>Product SubTitle</th>
                

                <th>Product Availability</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p,index) => (
                <tr key={p.productId}>
                <td>{index + 1}</td> 
                  <td>{p._id}</td>
                  <td>{p.productId}</td>
                  <td>{p.productTitle}</td>
                  <td>{p.productDescription}</td>
                  <td>{p.productSubTitle}</td>
                  


                  <td>{p.productAvailability}</td>
                  <td>
                    <button
                      className="btn btn-danger mr-2"
                      onClick={() => handleDelete(p._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleUpdate(p.productId)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

        {/* New button to toggle order list visibility */}
        <button className="btn btn-info mt-3 ml-2" onClick={toggleOrderListVisibility}>
        {orderListVisible ? "Hide Order List" : "View Order List"}
      </button>


      {/* New section to display order list */}
      {orderListVisible && (
        <div>
          <h2 className="mt-4">Order List</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                {/* Add table headers based on your order data structure */}
                <th>Sr. No</th>
                <th>Product Names</th>
                <th>Customer Name</th>
                <th>Phone No</th>
                <th>Email</th>
                <th>Company Name</th>
                <th>Street Address</th>
                <th>State</th>
                <th>Country / Region</th>
                <th>Other Notes</th>
                <th>Date & Time</th>
                {/* ... (add more headers as needed) */}
              </tr>
            </thead>
            <tbody>
              {orders
                .slice() // create a shallow copy of the array
                .sort((a, b) => {
                  const dateA = parse(a.orderAt, 'dd/MM/yyyy HH:mm', new Date());
                  const dateB = parse(b.orderAt, 'dd/MM/yyyy HH:mm', new Date());
      
                  return dateB.getTime() - dateA.getTime();
                })
                .map((order, index) => (
                  <tr key={order.orderId}>
                    {/* Add table data based on your order data structure */}
                    <td>{index + 1}</td>
                    <td>{order.selectedProduct}</td>
                    <td>{order.firstName + ' ' + order.lastName}</td>
                    <td>{order.phone}</td>
                    <td>{order.email}</td>
                    <td>{order.companyName}</td>
                    <td>{order.streetAddress}</td>
                    <td>{order.states}</td>
                    <td>{order.countryRegion}</td>
                    <td>{order.orderNotes}</td>
                    <td>{format(parse(order.orderAt, 'dd/MM/yyyy', new Date()), 'dd/MM/yyyy HH:mm')}</td>
                    {/* ... (add more data cells as needed) */}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
      {updateFormVisible && (
        <div>
          <h2 className="mt-4">Update Product</h2>
          <form
            onSubmit={handleUpdateSubmit}
            encType="multipart/form-data"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="exampleInputUsername">Username</label>
              <input
                name="username"
                required
                type="text"
                className="form-control"
                id="username"
                aria-describedby="usernamelHelp"
                placeholder="Enter Your Username"
                onChange={(e) => {
                  setUpdateProduct({
                    ...updateProduct,
                    username: e.target.value,
                  });
                }}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your username with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                name="password"
                required
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => {
                  setUpdateProduct({
                    ...updateProduct,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputproductId">UPID</label>
              <input
                name="productId"
                type="text"
                className="form-control"
                id="exampleInputproductId"
                aria-describedby="productIdlHelp"
                placeholder=""
                disabled
                value={updateProduct._id}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputproductId">Product Id</label>
              <input
                name="productId"
                type="text"
                className="form-control"
                id="exampleInputproductId"
                aria-describedby="productIdlHelp"
                placeholder="Enter Product Id"
                value={updateProduct.productId}
                onChange={(e) => {
                  setUpdateProduct({
                    ...updateProduct,
                    productId: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputproductTitle">Product Title</label>
              <input
                name="productTitle"
                type="text"
                className="form-control"
                id="exampleproductTitle"
                value={updateProduct.productTitle}
                aria-describedby="productTitleHelp"
                placeholder="Enter Product Title"
                onChange={(e) => {
                  setUpdateProduct({
                    ...updateProduct,
                    productTitle: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputproductDescription">
                Product Description
              </label>
              <textarea
                rows={5}
                cols={5}
                name="productDescription"
                type="text"
                value={updateProduct.productDescription}
                className="form-control"
                id="exampleInputproductDescription"
                aria-describedby="productDescriptionHelp"
                placeholder="Enter Product Description"
                onChange={(e) => {
                  setUpdateProduct({
                    ...updateProduct,
                    productDescription: e.target.value,
                  });
                }}
              />
            </div>

            <div className="form-group">
              <label for="exampleInputproductPrice">Product SubTitle</label>
              <input
                name="productSubTitle"
                type="text"
                className="form-control"
                value={updateProduct.productSubTitle}
                id="exampleproductPrice"
                aria-describedby="productPriceHelp"
                placeholder="Enter Product SubTitle"
                onChange={(e) => {
                  setUpdateProduct({
                    ...updateProduct,
                    productSubTitle: e.target.value,
                  });
                }}
              />
            </div>
            
            <div className="form-group">
              <label for="exampleInputproductTitle">Product Availability</label>
              <input
                name="productAvailability"
                type="text"
                value={updateProduct.productAvailability}
                className="form-control"
                id="exampleproductAvailability"
                aria-describedby="productAvailabilityHelp"
                placeholder="Enter Product Availability"
                onChange={(e) => {
                  setUpdateProduct({
                    ...updateProduct,
                    productAvailability: e.target.value,
                  });
                }}
              />
            </div>
            <div class="input-group">
            <input
            name="productImage"
            type="file"
            className="form-control"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
            onChange={(e) => {
              setUpdateProduct({
                ...updateProduct,
                productImage: e.target.files,
              });
            }}
            multiple
          />
            </div>

            <div className="text-center mt-4 mb-4">
              <button type="submit" className="btn btn-primary bg-primary mr-2" disabled={loading}>
              {loading ? 'Updating...' : 'Update'}

                
              </button>
              <button
                type="button"
                className="btn btn-secondary bg-danger"
                onClick={handleCancelUpdate}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Admin;
