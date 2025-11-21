const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const gameroutes = require("./routes/gameroutes");
const reviewroutes = require("./routes/reviewroutes");

dotenv.config();
console.log("ENV cargado:", process.env.MONGO_URI);
const app = express();
app.use(express.json());

// Conexión a Mongo
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado 🔥"))
  .catch((err) => console.error("Error en MongoDB:", err));

// Rutas
app.use("/api/games", gameroutes);
app.use("/api/reviews", reviewroutes);

// Ruta base
app.get("/", (req, res) => {
  res.send("Servidor funcionando con MongoDB 🔥");
});

app.listen(5000, () => {
  console.log("Servidor corriendo en http://localhost:5000");
});
