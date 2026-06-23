import mysql from "mysql2/promise";

console.log("Creando conexion...");
export const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "wood_trend"
});

console.log("Conectado");