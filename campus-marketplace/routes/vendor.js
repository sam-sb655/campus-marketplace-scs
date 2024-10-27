const express = require("express");
const router = express.Router();
const Vendor = require("../models/Vendor"); // Import the Vendor model
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing

// Vendor Registration Route
router.post("/register", async (req, res) => {
  const {
    businessName,
    email,
    phoneNumber,
    password,
    taxId,
    licenseNumber,
    bio,
  } = req.body;

  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10); // Use a suitable number of salt rounds

    // Create a new vendor instance with the hashed password
    const newVendor = new Vendor({
      businessName,
      email,
      phoneNumber,
      password: hashedPassword, // Store the hashed password
      taxId,
      licenseNumber,
      bio,
    });

    // Save the vendor to the database
    await newVendor.save();
    res
      .status(201)
      .json({ message: "Vendor registered successfully", vendor: newVendor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registering vendor", error });
  }
});

// Vendor Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch the vendor by email
    const vendor = await Vendor.findOne({ email });

    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" }); // Handle not found case
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, vendor.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" }); // Invalid password
    }

    // If login is successful, return vendor details or token
    res.status(200).json({ message: "Login successful", vendor }); // You may return a token here if using JWT
  } catch (error) {
    console.error("Error logging in vendor:", error);
    res.status(500).json({ message: "Server error" }); // Handle server errors
  }
});

// Endpoint to fetch all vendor details
router.get("/all", async (req, res) => {
  try {
    // Fetch all vendor details
    const vendors = await Vendor.find(
      {},
      {
        _id: 1,
        businessName: 1,
        email: 1,
        phoneNumber: 1,
        taxId: 1,
        licenseNumber: 1,
        bio: 1,
      }
    );

    res.json(vendors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch vendors", error });
  }
});

// Endpoint to delete a vendor by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params; // Get the vendor ID from the request parameters
    const deletedVendor = await Vendor.findByIdAndDelete(id); // Delete the vendor

    if (!deletedVendor) {
      return res.status(404).json({ message: "Vendor not found" }); // Handle not found case
    }

    return res.status(200).json({ message: "Vendor deleted successfully" }); // Successful deletion
  } catch (error) {
    console.error("Error deleting vendor:", error);
    return res.status(500).json({ message: "Server error" }); // Handle server errors
  }
});

module.exports = router;
