import mysql from "mysql2/promise";
import { silla, mesa, escritorio, estanteria, encimera, armario, inodoro, perchero, prod} from "./productos.js";

export async function bd(prod) {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "wood_trend"
    });

    for (const item of prod) {
        await connection.execute(
            `INSERT INTO productos (nombre, precio, descripcion, categoria, imagen, tipo)
             VALUES (?, ?, ?, ?, ?, ?)`,
            [
                item.nombre,
                item.precio,
                item.descripcion,
                item.categoria,
                item.imagen,
                item.tipo
            ]
        );
    }

    console.log("Productos insertados");
    await connection.end();
};