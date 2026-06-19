const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  userId:{
    type:String
  },

  userName:{
    type:String
  },

  email:{
    type:String
  },

  customerName:{
    type:String,
    required:true
  },

  address:{
    type:String,
    required:true
  },

  phone:{
    type:String,
    required:true
  },

  items:[
    {
      name:String,
      price:Number,
      quantity:Number
    }
  ],

  totalPrice:{
    type:Number,
    required:true
  },

  createdAt:{
    type:Date,
    default:Date.now
  }

});

module.exports =
mongoose.model(
  "Order",
  orderSchema
);