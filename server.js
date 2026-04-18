console.log("🔥 SERVER.JS LOADED");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const plantRoutes = require("./routes/plantRoutes");
const authRoutes = require("./routes/authRoutes");

// Load environment variables
dotenv.config();
console.log("MONGO TEST:", process.env.MONGO_URI);
// Connect database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/plants", plantRoutes);
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("🌿 GreenThumb Backend is Running!");
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});