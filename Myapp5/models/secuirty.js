// models/Step4Details.js
const mongoose = require("mongoose");

const Security = new mongoose.Schema({
  phone: { type: String },
  email: { type: String },
  userId: { type: String },
  Status: { type: Number, default: 0 },
  date: { type: Date, default: Date.now }
});

const SecurityData = mongoose.model("SecurityData", Security);
module.exports = SecurityData;
