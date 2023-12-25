// product.js

import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  productId: {
    type: String,
    unique: true,
    required: true,
  },
  productImage: {
    type: [String],
    required: true,
  },
  productTitle: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productSubTitle: {
    type: String,
    required: true,
  },
  productAvailability: {
    type: String,
    required: true,
  },

  
});

const Product = mongoose.model("Product", productSchema);

export default Product;
