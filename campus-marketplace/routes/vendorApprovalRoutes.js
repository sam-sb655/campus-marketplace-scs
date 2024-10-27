const express = require("express");
const router = express.Router();
const Vendor = require("../models/Vendor"); // Import your Vendor model
const ExistingVendor = require("../models/ExistingVendor"); // Import your ExistingVendor model

// New route for approving a vendor
router.post("/approve/:id", async (req, res) => {
  const vendorId = req.params.id;

  try {
    // Find the vendor to approve
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    // Create a new ExistingVendor instance with the vendor data
    const newExistingVendor = new ExistingVendor(vendor.toObject()); // Copy vendor data

    // Save the new existing vendor
    await newExistingVendor.save();

    // Delete the vendor from the vendors collection
    await Vendor.findByIdAndDelete(vendorId);

    res
      .status(200)
      .json({ message: "Vendor approved and moved to existing vendors" });
  } catch (error) {
    console.error("Error approving vendor:", error);
    res.status(500).json({ message: "Failed to approve vendor" });
  }
});

module.exports = router;
