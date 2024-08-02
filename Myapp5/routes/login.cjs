const express = require("express");
const router = express.Router();
const Admin_User = require("../models/UserData"); // Import the model
const jwt = require("jsonwebtoken");
const { default: User } = require("../models/User");

const secretKey = "king"; // Use a secure secret key in production
router.get("/", (req, res) => {
  res.render("pages-login", { title: "Admin Login", currentRoute: req.url });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }
    req.user = user;
    next();
  });
}

router.post("/ChangeAdminPassword", authenticateToken, async (req, res) => {
  try {
    const { CurrentPassword, NewPassword } = req.body;
    const username = req.user.name; // Use the username from the token

    // Find the user in the database
    const user = await User.findOne({ username: username });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if the current password matches
    if (CurrentPassword !== user.password) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    // Update the password
    user.password = NewPassword;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
