const mongoose = require("mongoose");

const existingVendorSchema = new mongoose.Schema(
  {
    businessName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    taxId: { type: String, required: true },
    licenseNumber: { type: String, required: true },
    bio: { type: String, required: true },
    // Add any other fields you want to keep for existing vendors
  },
  { timestamps: true }
);

const ExistingVendor = mongoose.model("ExistingVendor", existingVendorSchema);

module.exports = ExistingVendor;
