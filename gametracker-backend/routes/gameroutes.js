const express = require("express");
const Game = require("../models/Game");

const router = express.Router();

// Obtener todos los juegos
router.get("/", async (req, res) => {
  const games = await Game.find();
  res.json(games);
});

// Crear juego
router.post("/", async (req, res) => {
  const game = new Game(req.body);
  const saved = await game.save();
  res.json(saved);
});

// Actualizar juego
router.put("/:id", async (req, res) => {
  const updated = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Eliminar juego
router.delete("/:id", async (req, res) => {
  await Game.findByIdAndDelete(req.params.id);
  res.json({ message: "Juego eliminado" });
});

module.exports = router;