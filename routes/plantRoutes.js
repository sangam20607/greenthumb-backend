const express = require("express");
const router = express.Router();

const {
  getPlants,
  createPlant,
  deletePlant
} = require("../controllers/plantController");

const auth = require("../middleware/authMiddleware"); 

router.get("/", authMiddleware, getPlants);
router.post("/", authMiddleware, createPlant);
router.delete("/:id", authMiddleware, deletePlant);

module.exports = router;