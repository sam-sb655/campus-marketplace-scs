const express = require("express");
const router = express.Router();
const Vendor = require("../models/Vendor"); // Adjust the path to your Vendor model

// Delete a vendor by ID

router.delete("/:id", async (req, res) => {
  try {
    const vendorId = req.params.id;
    const deletedVendor = await Vendor.findByIdAndDelete(vendorId);
    if (!deletedVendor) {
      return res.status(404).json({ message: "Vendor not found" }); // Vendor ID not found
    }
    return res.status(200).json({ message: "Vendor deleted successfully" });
  } catch (error) {
    console.error("Error deleting vendor:", error); // Log error for debugging
    return res.status(500).json({ message: "Error deleting vendor", error }); // General server error
  }
});

// Other vendor routes...
module.exports = router;
