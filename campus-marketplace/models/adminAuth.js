const mongoose = require("mongoose");

const AdminAuthSchema = new mongoose.Schema({
  authID: {
    type: String,
    required: true,
    unique: true, // Ensure no duplicate authIDs
  },
});

module.exports = mongoose.model("AdminAuth", AdminAuthSchema);
