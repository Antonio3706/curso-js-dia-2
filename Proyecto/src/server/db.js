import mysql from "mysql2/promise";

console.log("Creando conexion...");
export const connection = await mysql.createConnection({
    host: "localhost",
    port:3306,
    user: "root",
    password: "root",
    database: "wood_trend"
});

console.log("Conectado");