// ProductRoutes.js
import express from "express";
import multer from "multer";
import { Storage } from "@google-cloud/storage";
import Product from "../models/Product.js";
import Order from "../models/orderSchema.js";
import nodemailer from "nodemailer";
import { format } from 'date-fns';
import keyFile from "file:///opt/render/project/src/mykey.json" assert { type: "json" };

// Set the environment variable for Google Cloud Storage
process.env.GOOGLE_APPLICATION_CREDENTIALS = `${keyFile}`;

const routes = express.Router();

// Initialize Google Cloud Storage
const storage = new Storage();
const bucket = storage.bucket("pnr-vercel"); // Replace with your actual bucket name

const upload = multer({
  storage: multer.memoryStorage(), // Store file in memory for processing
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error("Invalid file type. Only JPEG, JPG, and PNG are allowed."),
        false
      );
    }
  },
});

routes.get("/getAllProduct", async (req, res) => {
  try {
    console.log("Request coming to get all products from frontend");
    const p = await Product.find();
    res.json(p);
  } catch (error) {
    res.json(error);
  }
});

routes.post("/createProduct", upload.array("productImage", 5), async (req, res) => {
  console.log("request is coming for create");

  const username = req.body.username;
  const password = req.body.password;
  console.log(username + " " + password);

  try {
    if (username === "akash" && password === "sky") {
      console.log("request is coming for create with condition");

      const newProduct = new Product(req.body);

      // If there are uploaded files, store them in Google Cloud Storage
      if (req.files) {
        const filePromises = req.files.map(async (file, i) => {
          try {
          const fileName = Date.now() + "_" + file.originalname;
          const fileBuffer = file.buffer;

          const fileUpload = bucket.file(fileName);
          const stream = fileUpload.createWriteStream({
            metadata: {
              contentType: file.mimetype,
            },
          });

          stream.end(fileBuffer);

          await new Promise((resolve, reject) => {
            stream.on("finish", resolve);
            stream.on("error", reject);
          });

          // Replace the productImage array with the uploaded file URLs
          if (i < newProduct.productImage.length) {
            newProduct.productImage[i] = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
          } else {
            newProduct.productImage.push(`https://storage.googleapis.com/${bucket.name}/${fileName}`);
          }
        } catch (error) {
          console.error("Error processing file:", error);
          // You might want to handle or log this error as needed
        }
        });

        await Promise.all(filePromises);
      }

      const createdProduct = await newProduct.save();
      res.json(createdProduct);
    } else {
      res.status(403).json({ message: "Unauthorized" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

routes.delete("/deleteProduct/:productId", async (req, res) => {
  const id = req.params.productId;
  try {
    const remove = await Product.findByIdAndDelete(id);
    res.json(remove);
  } catch (error) {
    res.json(error);
  }
});

routes.put(
  "/updateProduct/:productId",
  upload.array("productImage", 5),
  async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const id = req.params.productId;

    try {
      if (username === "akash" && password === "sky") {
        const existingProduct = await Product.findById(id);
        if (!existingProduct) {
          return res.status(404).json({ message: "Product not found" });
        }

        // Completely replace existing data with new data from req.body
        existingProduct.set(req.body);

        // Update product image if new ones are provided
        if (req.files) {
          // Assuming 'productImage' is the field name in the FormData for multiple images
          for (let i = 0; i < req.files.length; i++) {
            // Check if the current index is within the bounds of the existing array
            if (i < existingProduct.productImage.length) {
              existingProduct.productImage[i] = req.files[i].filename;
            } else {
              // If the existing array is not long enough, push the new filename
              existingProduct.productImage.push(req.files[i].filename);
            }
          }
        }

        const updatedProduct = await existingProduct.save();
        res.json(updatedProduct);
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

routes.get("/getProduct/:productId", async (req, res) => {
  const id = req.params.productId;

  console.log("single product request" + res.body);
  try {
    const newProduct = await Product.findById(id);
    res.json(newProduct);
  } catch (error) {
    res.json(error);
  }
});

routes.post("/submit-order", async (req, res) => {
  console.log("request coming to the Email...");
  console.log(req.body);

  const formData = req.body;
  const orderDate = format(new Date(), 'dd/MM/yyyy HH:mm');


  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "akashkhandagale038@gmail.com",
        pass: "capq qsxi uovz pgdz",
      },
    });

    const mailOptions = {
      to: "akashkhandagale038@gmail.com",
      subject: `New Order Submission - ${formData.firstName} ${formData.lastName}`,
      text: `
        
        Product Names: ${formData.selectedProduct},
       
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Street Address: ${formData.streetAddress}
        Company Name: ${formData.companyName}
        States: ${formData.states}
        Country / Region: ${formData.countryRegion}
        Order Notes: ${formData.orderNotes}
        Ship to Different Address: ${
          formData.shipToDifferentAddress ? "Yes" : "No"
        }
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    const newOrder = new Order({
      ...formData,
      orderAt: orderDate, // Save the formatted order date
    });
    await newOrder.save();

    res.status(200).send("Order submitted successfully!");
  } catch (error) {
    console.error("Error processing order:", error);
    res.status(500).send("Internal Server Error");
  }
});

routes.get("/getOrders", async (req, res) => {
  try {
    console.log("Request coming to All orders");
    const p = await Order.find();
    res.json(p);
  } catch (error) {
    res.json(error);
  }
});


routes.post("/submit-inquiry", async (req, res) => {
  console.log("request coming to the Email...");
  console.log(req.body);

  const formData = req.body;
  const inquiryDate = format(new Date(), 'dd/MM/yyyy HH:mm');


  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "akashkhandagale038@gmail.com",
        pass: "capq qsxi uovz pgdz",
      },
    });

    const mailOptions = {
      to: "akashkhandagale038@gmail.com",
      subject: `New Inquiry - ${formData.firstName} ${formData.lastName}`,
      text: `
        
       
       
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Street Address: ${formData.streetAddress}
        Company Name: ${formData.companyName}
        States: ${formData.states}
        Country / Region: ${formData.countryRegion}
        Inquiry Notes: ${formData.orderNotes}
        Inquiry Date : ${inquiryDate}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

   

    res.status(200).send("Order submitted successfully!");
  } catch (error) {
    console.error("Error processing order:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default routes;
