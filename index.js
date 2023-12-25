// index.js

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import ProductRouter from './routes/ProductRoutes.js'; // Note the .js extension
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'path'; // Import the 'path' module



dotenv.config();
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);


const app = express();
// Specify the directory where images are stored
const imagesDirectory = path.join(__dirname, './src/productImages');
const PORT = process.env.PORT || 3000;

app.get('/api/getImage/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, 'src', 'productImages', imageName);
  res.sendFile(imagePath);
});


// Configure static file serving
app.use(cors());
app.use(bodyParser.json());
app.use('/api/admin/product', ProductRouter);
app.use('/', express.static('dist'))
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));

app.use('/api/getImage', express.static(imagesDirectory));






mongoose
  .connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database Connected');
    console.log('DB_CONNECTION_URL:', process.env.DB_CONNECTION_URL);
  })
  .catch((error) => {
    console.log('DB_CONNECTION_URL:', process.env.DB_CONNECTION_URL);
    console.error('Error connecting to the database:', error);
  });



  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
