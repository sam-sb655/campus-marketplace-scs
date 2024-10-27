// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // URL or path to the image
  quantity: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
