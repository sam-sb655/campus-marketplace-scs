const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // Import the CORS package
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const vendorRoutes = require("./routes/vendor"); // New import for vendor routes
const vendorApprovalRoutes = require("./routes/vendorApprovalRoutes");
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON requests

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/vendors", vendorRoutes); // Use the new vendor routes
app.use("/api/vendors", vendorApprovalRoutes);
// Admin Signin Route
app.post("/api/admin/signin", (req, res) => {
  const { authID } = req.body;
  const validAuthID = "ANU-SAM-BAS";

  if (authID === validAuthID) {
    return res.status(200).json({ message: "Signin successful" });
  } else {
    return res.status(401).json({ message: "Invalid Authentication ID" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
