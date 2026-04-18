const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const plantRoutes = require("./routes/plantRoutes");

dotenv.config();
connectDB();

const app = express();

// middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/plants", plantRoutes);

// test route
app.get("/", (req, res) => {
  res.send("🌿 GreenThumb API Running");
});

// IMPORTANT: no wildcard routes like "*"

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});