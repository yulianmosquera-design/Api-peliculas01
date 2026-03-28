const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Datos en memoria
let generos = [];
let peliculas = [];

// RUTAS GENEROS
app.get("/api/generos", (req, res) => {
  res.json(generos);
});

app.post("/api/generos", (req, res) => {
  const genero = req.body;
  generos.push(genero);
  res.json(genero);
});

// RUTAS PELICULAS
app.get("/api/peliculas", (req, res) => {
  res.json(peliculas);
});

app.post("/api/peliculas", (req, res) => {
  const pelicula = req.body;
  peliculas.push(pelicula);
  res.json(pelicula);
});

// PRUEBA
app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
