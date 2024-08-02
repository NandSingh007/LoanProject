// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String
//   },
//   password: {
//     type: Number
//   }
// });
// // Method to compare password

// const User = mongoose.model("User", userSchema);
// module.exports = User;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String }
});

// Method to compare password
UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
