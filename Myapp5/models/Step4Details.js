// models/Step4Details.js
const mongoose = require("mongoose");

const Step4DetailsSchema = new mongoose.Schema({
  loanType: { type: String, required: true },
  amount: { type: Number, required: true },
  years: { type: Number, required: true },
  userId: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  Status: { type: Number, default: 0 }
});

const Step4Details = mongoose.model("Step4Details", Step4DetailsSchema);
module.exports = Step4Details;
