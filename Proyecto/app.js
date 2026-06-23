import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import { prod } from "./src/public/js/productos.js";
import { connection } from "./src/server/db.js";
import { usuRegistro } from "./src/server/seed.js";

const app=express();

//await bd(prod);

// equivalente a __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));


app.use(express.static(path.join(__dirname, "src/public")));
app.use(express.static(path.join(__dirname, "src/pages")));
app.use(express.json());
// Rutas
app.get("/", (req, res) => {
    res.render("registro");
});

app.get("/descripciones", (req, res) => {
    res.render("descripciones");
});

app.get("/carrito", (req, res) => {
    res.render("carrito");
});

app.get("/usuario", (req, res) => {
    res.render("usuario");
});

app.get("/inicio-sesion", (req, res) => {
    res.render("inicio-sesion");
});

/*app.get("/seed", async (req, res) => {
    try {
        await bd(prod);
        res.send("Base de datos rellenada");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al rellenar BD");
    }
});*/

app.post("/registro", async (req, res) => {
    console.log("ENTRA EN /registro");
    console.log(req.body);

    try {
        await usuRegistro(req.body);
        res.json({ ok: true, msg: "Usuario creado" });

    } catch (err) {
        console.error(err);
        res.json({ ok: false, msg: err.message });
    }
});

/*function login(){
    app.post("/login", async (req, res) => {

        const { email, password } = req.body;

        const [rows] = await connection.execute(
            "SELECT * FROM usuarios WHERE email = ? AND password = ?",
            [email, password]
        );

        if (rows.length > 0) {
            res.json({ ok: true, user: rows[0] });
        } else {
            res.json({ ok: false, message: "Usuario no válido" });
        }
    });
}*/

app.listen(8080, () => {
    console.log('Servidor iniciado en http://localhost:8080');
});