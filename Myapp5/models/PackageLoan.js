const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
  LoanType: { type: String, required: true },
  Amount: { type: Number, required: true },
  Intrest: { type: Number, required: true },
  MonthlyEmi: { type: Number, required: true },
  Duration: { type: Number, required: true },
  status: { type: String, default: "1" }
});

const PackageData = mongoose.model("PackageSchema", PackageSchema);

module.exports = PackageData;
