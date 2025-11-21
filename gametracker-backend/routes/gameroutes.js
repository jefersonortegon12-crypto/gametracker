const express = require("express");
const Game = require("../models/Game");
const router = express.Router();

// Crear juego
router.post("/", async (req, res) => {
  try {
    const game = await Game.create(req.body);
    res.json(game);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Obtener todos los juegos
router.get("/", async (req, res) => {
  const games = await Game.find();
  res.json(games);
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
