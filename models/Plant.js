const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    minTemp: Number,
    maxTemp: Number,
    waterFrequency: String,
    sunlight: String,
    notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plant", plantSchema);