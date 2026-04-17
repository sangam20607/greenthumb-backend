const express = require("express");
const router = express.Router();

const {
  getPlants,
  createPlant,
  deletePlant
} = require("../controllers/plantController");

router.get("/", getPlants);
router.post("/", createPlant);
router.delete("/:id", deletePlant);

module.exports = router;