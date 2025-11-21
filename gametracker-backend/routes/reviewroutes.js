const express = require("express");
const Review = require("../models/Review");
const router = express.Router();

// Crear reseña
router.post("/", async (req, res) => {
  const review = await Review.create(req.body);
  res.json(review);
});

// Obtener reseñas de un juego
router.get("/:gameId", async (req, res) => {
  const reviews = await Review.find({ gameId: req.params.gameId });
  res.json(reviews);
});

module.exports = router;
