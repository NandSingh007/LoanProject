const mongoose = require("mongoose");

const CompanyProfileSchema = new mongoose.Schema({
  charges1: { type: Number, required: true },
  charges2: { type: Number, required: true },
  address: { type: String, required: true },
  contactNo: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: Number, default: 0 },
  Signature: { type: String },
  paymentQRCharges2: { type: String },
  logo: { type: String },
  paymentQRCharges1: { type: String }, // Path to the uploaded QR code file
  upiId: { type: String, required: true },
  nameOnUPI: { type: String, required: true }
});

const CompanyProfile = mongoose.model("CompanyProfile", CompanyProfileSchema);

module.exports = CompanyProfile;
