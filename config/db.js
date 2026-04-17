const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("🔄 Connecting to MongoDB...");
    console.log("URI EXISTS:", !!process.env.MONGO_URI);

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected 🌿: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB FAILED:");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;