// In your controllers/vendorController.js
const Vendor = require("../models/Vendor"); // Adjust the path as necessary

// Delete a vendor
exports.deleteVendor = async (req, res) => {
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
};
