const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🔥 MongoDB conectado correctamente"))
  .catch(err => console.log("❌ Error al conectar a MongoDB:", err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.status(200).send('GameTracker funcionando 🚀');
});

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
// Rutas
app.use('/api/games', require('./routes/gameRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/games', gamesRoutes);