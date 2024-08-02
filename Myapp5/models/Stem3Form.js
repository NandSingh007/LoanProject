const mongoose = require("mongoose");

const joDocumentsSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  adhaarFront: { type: String, required: true },
  adhaarBack: { type: String, required: true },
  panFront: { type: String, required: true },
  userPhoto: { type: String, required: true },
  Signature: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true }
});

const JoDocuments = mongoose.model("JoDocuments", joDocumentsSchema);

module.exports = JoDocuments;
