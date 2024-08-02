// models/UserDetails.js
const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  pinCode: { type: String, required: true },
  status: { type: Number, default: 0 },
  fatherName: { type: String, required: true }
});

const StepFormData = mongoose.model("UserDetails", userDetailsSchema);
module.exports = StepFormData;
