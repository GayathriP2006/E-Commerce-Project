const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  image: {
    type: String,
    default: ""
  },
  rating: {
    type: Number,
    default: 4
  }
});

module.exports = mongoose.model("Product", productSchema);