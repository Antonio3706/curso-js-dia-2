import { silla, mesa, escritorio, armario, inodoro, encimera, estanteria, perchero, prod } from "./productos.js";
import { cargarProducto, ponerInformacion, mostrarOpcionesBusqueda, alternarOpcionesBusqueda, botonesCategoria, botonesMarca, ventanaCarrito, ventanaPerfil } from "./funciones.js";
console.log("ANTES");

import { reg } from "./funciones.js";

console.log(reg);

reg();
import { initCarrito } from "../carrito.js";
import { initRegistro } from "../registro.js";

const control1=document.getElementById("silla");
const control2=document.getElementById("armario");
const control3=document.getElementById("encimera");
const control4=document.getElementById("escritorio");
const control5=document.getElementById("estanteria");
const control6=document.getElementById("inodoro");
const control7=document.getElementById("mesa");
const control8=document.getElementById("perchero");

if(control1){
    control1.addEventListener('click', () => {
        cargarProducto(silla);
    });
}

if(control2){
    control2.addEventListener('click', () => {
        cargarProducto(armario);
    });
}

if(control3){
    control3.addEventListener('click', () => {
        cargarProducto(encimera);
    });
}

if(control4){
    control4.addEventListener('click', () => {
        cargarProducto(escritorio);
    });
}

if(control5){
    control5.addEventListener('click', () => {
        cargarProducto(estanteria);
    });
}

if(control6){
    control6.addEventListener('click', () => {
        cargarProducto(inodoro);
    });
}

if(control7){
    control7.addEventListener('click', () => {
        cargarProducto(mesa);
    });
}

if(control8){
    control8.addEventListener('click', () => {
        cargarProducto(perchero);
    });
}

window.addEventListener("DOMContentLoaded", () =>{
    ponerInformacion();
});

mostrarOpcionesBusqueda();

alternarOpcionesBusqueda(
    "contenedor-categoria",
    "contenedor2",
    "contenedor-marca",
    "btnCategorias"
);

alternarOpcionesBusqueda(
    "contenedor2",
    "contenedor-categoria",
    "contenedor-marca",
    "btnInicio"
);

alternarOpcionesBusqueda(
    "contenedor-marca",
    "contenedor-categoria",
    "contenedor2",
    "btnMarcas"
);

botonesCategoria(prod);
botonesMarca(prod);

window.addEventListener("DOMContentLoaded", () =>{
    ventanaCarrito();
});

window.addEventListener("DOMContentLoaded", () =>{
    ventanaPerfil();
});



document.addEventListener("DOMContentLoaded", () => {

    const page = document.body.dataset.page;

    switch (page) {
        case "registro":
            initRegistro();
            break;

        case "index":
            initHome();
            break;

        case "carrito":
            initCarrito();
            break;
    }
});