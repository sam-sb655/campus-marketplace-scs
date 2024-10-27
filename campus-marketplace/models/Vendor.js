const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    taxId: {
      type: String,
      required: true,
    },
    licenseNumber: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Check if the model already exists before defining it
module.exports =
  mongoose.models.Vendor || mongoose.model("Vendor", vendorSchema);
