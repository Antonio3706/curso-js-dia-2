import mysql from "mysql2/promise";

const express=require('express');
const app=express();
const path = require('path');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'public')));

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "wood_trend"
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/descripcion', (req, res) => {
    res.render('descripcion');
});

app.get('/carrito', (req, res) => {
    res.render('carrito');
});

app.get('/usuario', (req, res) => {
    res.render('usuario');
});


app.listen(8080, () => {
    console.log('Servidor iniciado en http://localhost:8080');
});

