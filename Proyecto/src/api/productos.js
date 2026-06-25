import express from "express";
import { connection } from "../server/db.js";
//Api para acceder a los datos la base de datos
const router = express.Router();
console.log("Cargando productosRouter...");

// 🔥 GET TODOS LOS PRODUCTOS
router.get("/", async (req, res) => {
    try {
        const [rows] = await connection.execute(
            "SELECT * FROM productos"
        );

        res.json(rows);

    } catch (err) {
        console.error(err);
        res.status(500).json({
            ok: false,
            message: "Error al obtener productos"
        });
    }
});

// 🔥 GET PRODUCTO POR ID (para descripciones)
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await connection.execute(
            "SELECT * FROM productos WHERE id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                ok: false,
                message: "Producto no encontrado"
            });
        }

        res.json(rows[0]);

    } catch (err) {
        console.error(err);
        res.status(500).json({
            ok: false,
            message: "Error al obtener producto"
        });
    }
});

export default router;