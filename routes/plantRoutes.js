const express = require("express");
const router = express.Router();

const {
  getPlants,
  createPlant,
  deletePlant
} = require("../controllers/plantController");

const auth = require("../middleware/authMiddleware"); 

router.get("/", auth, getPlants);
router.post("/", auth, createPlant);
router.delete("/:id", auth, deletePlant);

module.exports = router;