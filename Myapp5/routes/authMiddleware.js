const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // Get token from cookies
  const token = req.cookies.token; // Make sure you have cookie-parser middleware in use

  if (!token) {
    return res.redirect("/"); // Redirect to login if no token
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, "king"); // Use the same secret key as in login
    req.user = decoded; // Attach user info to request object
    next();
  } catch (err) {
    res.redirect("/"); // Redirect to login if token is not valid
  }
};
