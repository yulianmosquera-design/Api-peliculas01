const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Base de datos temporal
let peliculas = [];

// Ruta principal
app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

// VER películas
app.get("/api/peliculas", (req, res) => {
  res.json(peliculas);
});

// CREAR película
app.post("/api/peliculas", (req, res) => {
  const nueva = req.body;
  peliculas.push(nueva);
  res.json(nueva);
});

// ACTUALIZAR
app.put("/api/peliculas/:id", (req, res) => {
  const id = req.params.id;
  peliculas[id] = req.body;
  res.json(peliculas[id]);
});

// ELIMINAR
app.delete("/api/peliculas/:id", (req, res) => {
  const id = req.params.id;
  peliculas.splice(id, 1);
  res.json({ mensaje: "Eliminada" });
});

// IMPORTANTE PARA RENDER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo");
});
