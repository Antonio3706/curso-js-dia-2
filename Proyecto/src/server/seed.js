import { connection } from "./db.js";
import { prod } from "../public/js/productos.js";

//Para insertar los datos a la tabla productos
/*export async function bd(prod) {
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
}*/

export async function bd(prod) {
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
}