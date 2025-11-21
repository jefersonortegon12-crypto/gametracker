import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno

const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/api/test", (req, res) => {
  res.json({ mensaje: "✅ Servidor funcionando con MongoDB" });
});

// Conexión con MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error al conectar con MongoDB:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));