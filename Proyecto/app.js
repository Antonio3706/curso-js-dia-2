import express from "express";
import path from "path";
import { fileURLToPath } from "url";

//import { prod } from "./src/public/js/prodecto.js";
import { connection } from "./src/server/db.js";
import { usuRegistro, usuInit } from "./src/server/seed.js";
import productoRouter from "./src/api/productos.js";

const app=express();

// equivalente a __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));


app.use(express.static(path.join(__dirname, "src/public")));
app.use(express.static(path.join(__dirname, "src/pages")));
app.use(express.json());


const router = express.Router();

app.use("/api/productos", productoRouter);

app.use((req, res, next) => {
    console.log("REQUEST:", req.method, req.url);
    next();
});

// Rutas
app.get("/", (req, res) => {
    console.log("ENTRA EN INICIO SESIÓN");
    res.render("inicio-sesion");
});

app.get("/index", async (req, res) => {
    res.render("index");
});

app.get("/registro", (req, res) => {
    res.render("registro");
});

app.get("/descripciones/:id", (req, res) => {
    res.render("descripciones");
});

app.get("/carrito", (req, res) => {
    res.render("carrito");
});

app.get("/usuario", (req, res) => {
    res.render("usuario");
});

app.get("/inicio-sesion", (req, res) => {
    console.log("ENTRA EN INICIO SESIÓN despues de registro");
    res.render("inicio-sesion");
});

app.get("/api/productos/:id", async (req, res) => {

    const id = req.params.id;

    const [rows] = await connection.query(
        "SELECT * FROM productos WHERE id = ?",
        [id]
    );

    res.json(rows[0]);
});

app.post("/inicio-sesion", async (req, res) => {

    try {
        const usuario = await usuInit(req.body);

        res.json({
            ok: true,
            user: usuario
        });

    } catch (error) {
        console.error("LOGIN ERROR:", error);

        res.json({
            ok: false,
            mensaje: error.message
        });
    }
});

app.post("/registro", async (req, res) => {
    console.log("ENTRA EN registro");
    console.log(req.body);

    try {
        await usuRegistro(req.body);
        res.json({ ok: true, msg: "Usuario creado" });

    } catch (err) {
        console.error(err);
        res.json({ ok: false, msg: err.message });
    }
});



app.listen(8080, () => {
    console.log('Servidor iniciado en http://localhost:8080');
});