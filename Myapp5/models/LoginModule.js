// model/loginModule.js

const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  number: { type: String },
  otp: { type: Number },
  token: { type: String }
});

const LoginData = mongoose.model("LoginData", loginSchema);

// export default LoginData;

module.exports = LoginData;
