const dotenv = require("dotenv");
dotenv.config();

// Configuration object with various settings
const config = {
  // MongoDB connection URI
  mongoURI:
    "mongodb+srv://shubhamsrathore07:kticB5i8ADECGdD7@cluster0.42krjva.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", // Use the environment variable here
  // Port for the server to listen on (use environment variable or default to 8080)
  port: 8000
};
module.exports = config;
