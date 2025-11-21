const express = require("express");
const Game = require("../models/game");
const router = express.Router();

// Obtener todos los juegos
router.get("/", async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo juegos" });
  }
});

// Crear juego
router.post("/", async (req, res) => {
  try {
    const game = new Game(req.body);
    const saved = await game.save();
    res.json(saved);
  } catch (error) {
    res.status(500).json({ error: "Error creando el juego" });
  }
});

// Actualizar juego
router.put("/:id", async (req, res) => {
  try {
    const updated = await Game.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Error actualizando el juego" });
  }
});

// Eliminar juego
router.delete("/:id", async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.json({ message: "Juego eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error eliminando el juego" });
  }
});

module.exports = router;
