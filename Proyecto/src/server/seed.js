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
    const { nombre, apellidos, email, contrasena, contrasena2 } = user;

    // 1. comprobar contraseñas
    if (contrasena !== contrasena2) {
        throw new Error("Las contraseñas no coinciden");
    }

    // 2. comprobar email
    const [rows] = await connection.execute(
        "SELECT * FROM usuarios WHERE email = ?",
        [email]
    );

    if (rows.length > 0) {
        throw new Error("Email ya registrado");
    }

    // 3. hash password
    const hashed = await bcrypt.hash(contrasena, 10);

    // 4. insertar
    await connection.execute(
        `INSERT INTO usuarios (nombre, apellidos, email, contrasena)
         VALUES (?, ?, ?, ?)`,
        [nombre, apellidos, email, hashed]
    );
}