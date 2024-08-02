// models/IncomeDetails.js
const mongoose = require("mongoose");

const incomeDetailsSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  income: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: Number, default: 0 },
  jobType: { type: String, required: true },
  incomeProof: { type: String } // Path to the uploaded file
});
const jobDetails = mongoose.model("IncomeDetails", incomeDetailsSchema);

module.exports = jobDetails;
