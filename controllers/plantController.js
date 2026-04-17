const Plant = require("../models/Plant");

// GET all plants
const getPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE plant
const createPlant = async (req, res) => {
  try {
    const plant = new Plant(req.body);
    const savedPlant = await plant.save();
    res.status(201).json(savedPlant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// DELETE plant
const deletePlant = async (req, res) => {
  try {
    const plant = await Plant.findByIdAndDelete(req.params.id);

    if (!plant) {
      return res.status(404).json({ message: "Plant not found" });
    }

    res.json({ message: "Plant deleted successfully 🌿" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPlants, createPlant, deletePlant };