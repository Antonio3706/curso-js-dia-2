import express from "express";
const app = express();
app.listen(3306, () => {
console.log("Servidor iniciado en http://localhost:5500");
});
