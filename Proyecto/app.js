import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import { prod } from "./public/js/productos.js";
import { bd } from "./server/seed.js";

const app=express();

// equivalente a __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/descripcion", (req, res) => {
    res.render("descripcion");
});

app.get("/carrito", (req, res) => {
    res.render("carrito");
});

app.get("/usuario", (req, res) => {
    res.render("usuario");
});

app.get("/seed", async (req, res) => {
    await bd(prod);
    res.send("Base de datos rellenada");
});

app.listen(8080, () => {
    console.log('Servidor iniciado en http://localhost:8080');
});