const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  FullName: { type: String },
  Company: { type: String },
  Country: { type: String },
  Address: { type: String },
  Phone: { type: String },
  UPIKey: { type: String },
  UPIToken: { type: String },
  EmailSender: { type: String },
  EmailPassword: { type: String },
  Email: { type: String },
  About: { type: String },
  Job: { type: String },
  Password: { type: String },
  ProfileImg: { type: String },
  UserName: { type: String }
});
const Admin_User = mongoose.model("Admin_user", UserSchema);

const User_Refer_win_Schema = new mongoose.Schema({
  refer: { type: Number, default: 0 },
  referUser: { type: Number, default: 0 },
  newuser: { type: Number, default: 0 }
});
const User_refer_win = mongoose.model(
  "User_Refer_win_Schema",
  User_Refer_win_Schema
);

module.exports = { User_refer_win, Admin_User };
