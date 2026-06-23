import bcrypt from "bcrypt";
import { connection } from "./db.js";
import { prod } from "../public/js/productos.js";
import {hashPassword} from "../middleware/auth.js";


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

export async function usuRegistro(user) {

    console.log("1. Entra en usuRegistro");

    const { nombre, apellidos, email, contrasena, contrasena2 } = user;

    console.log("2. Datos recibidos:", user);

    if (contrasena !== contrasena2) {
        throw new Error("Las contraseñas no coinciden");
    }

    console.log("3. Contraseñas OK");

    const [rows] = await connection.execute(
        "SELECT * FROM usuarios WHERE email = ?",
        [email]
    );

    console.log("4. SELECT ejecutado");

    if (rows.length > 0) {
        throw new Error("Email ya registrado");
    }

    console.log("5. Email libre");

    const hashed = await bcrypt.hash(contrasena, 10);

    console.log("6. Hash generado");

    await connection.execute(
        `INSERT INTO usuarios (nombre, apellidos, email, contrasena)
         VALUES (?, ?, ?, ?)`,
        [nombre, apellidos, email, hashed]
    );

    console.log("7. Usuario insertado");
}