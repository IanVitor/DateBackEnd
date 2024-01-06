const express = require("express");
const router = express.Router()
const placesController = require("../controllers/placesController");

// Funções
router
  .route("/places")
  .get((req, res) => placesController.getAll(req, res));

module.exports = router;