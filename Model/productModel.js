const mongoose = require('mongoose');


const productsModel = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Product title is required"],
    },
    brand: {
        type: String,
        required: [true, "Product brand is required"],
    },
    image: {
        type: String,
        required: [true, "Product image is required"],
    },
    description:{
      type: String,
      required: true,
      minlength: [5, "minimum length of product should be 5"],
      maxlength: [100, "maximum length of product should be 100"]
    },
    price:{
        type: Number,
        required: true,
      },
    rating: {
        type: Number,
        required: true,
        min: [1, "minimum price of the product should be 1"],
        max: [5, "minimum price of the product should be 5"]
      },
     
    createdAt: {
        type: Date,
        default: Date.now
    }
  })

  //product model
  const products = mongoose.model('products', productsModel);

  module.exports = products;