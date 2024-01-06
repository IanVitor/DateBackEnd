const express = require("express");

const router = express.Router();

// Service router

const placeRouter = require("./places")

router.use("/", placeRouter)

module.exports = router;