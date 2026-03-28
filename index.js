
  

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Base de datos simulada
let generos = [];
let directores = [];
let productoras = [];
let tipos = [];
let peliculas = [];

// --- RUTAS ---

// Crear Género
app.post('/api/generos', (req, res) => {
  const { nombre } = req.body;
  if (!nombre) return res.status(400).json({ error: 'El nombre es requerido' });
  const nuevo = { id: generos.length + 1, nombre };
  generos.push(nuevo);
  res.status(201).json(nuevo);
});

// Listar Géneros
app.get('/api/generos', (req, res) => {
  res.json(generos);
});

// Crear Director
app.post('/api/directores', (req, res) => {
  const { nombre } = req.body;
  if (!nombre) return res.status(400).json({ error: 'El nombre es requerido' });
  const nuevo = { id: directores.length + 1, nombre };
  directores.push(nuevo);
  res.status(201).json(nuevo);
});

// Listar Directores
app.get('/api/directores', (req, res) => {
  res.json(directores);
});

// Crear Productora
app.post('/api/productoras', (req, res) => {
  const { nombre } = req.body;
  if (!nombre) return res.status(400).json({ error: 'El nombre es requerido' });
  const nueva = { id: productoras.length + 1, nombre };
  productoras.push(nueva);
  res.status(201).json(nueva);
});

// Listar Productoras
app.get('/api/productoras', (req, res) => {
  res.json(productoras);
});

// Crear Tipo
app.post('/api/tipos', (req, res) => {
  const { nombre } = req.body;
  if (!nombre) return res.status(400).json({ error: 'El nombre es requerido' });
  const nuevo = { id: tipos.length + 1, nombre };
  tipos.push(nuevo);
  res.status(201).json(nuevo);
});

// Listar Tipos
app.get('/api/tipos', (req, res) => {
  res.json(tipos);
});

// Crear Película
app.post('/api/peliculas', (req, res) => {
  const { titulo, url, imagen, anio, generoId, directorId, productoraId, tipoId, sinopsis } = req.body;
  if (!titulo || !anio || !generoId || !directorId || !productoraId || !tipoId)
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });

  const nueva = {
    id: peliculas.length + 1,
    titulo,
    url,
    imagen,
    anio,
    generoId,
    directorId,
    productoraId,
    tipoId,
    sinopsis
  };
  peliculas.push(nueva);
  res.status(201).json(nueva);
});

// Listar Películas
app.get('/api/peliculas', (req, res) => {
  const lista = peliculas.map(p => ({
    ...p,
    genero: generos.find(g => g.id === p.generoId)?.nombre,
    director: directores.find(d => d.id === p.directorId)?.nombre,
    productora: productoras.find(pr => pr.id === p.productoraId)?.nombre,
    tipo: tipos.find(t => t.id === p.tipoId)?.nombre
  }));
  res.json(lista);
});

// Ruta de prueba
app.get('/', (req, res) => res.send('Backend funcionando'));

app.listen(3000, () => console.log('Servidor corriendo'));
