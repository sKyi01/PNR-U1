import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({

  selectedProduct: {
    type: String,
   
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    
  },
  streetAddress: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
  },
  states: {
    type: String,
    required: true,
  },
  countryRegion: {
    type: String,
    required: true,
  },
  orderNotes: {
    type: String,
  },
  shipToDifferentAddress: {
    type: Boolean,
    default: false,
  },
 
  orderAt: {
    type: String,
    
  },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
