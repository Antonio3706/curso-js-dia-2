import { silla, mesa, escritorio, armario, inodoro, encimera, estanteria, perchero, prod } from "./productos.js";
import { cargarProducto, ponerInformacion, mostrarOpcionesBusqueda, alternarOpcionesBusqueda, botonesCategoria, botonesMarca, ventanaCarrito, ventanaPerfil, bd } from "./funciones.js";

bd();

const control1=document.getElementById("silla");
const control2=document.getElementById("armario");
const control3=document.getElementById("encimera");
const control4=document.getElementById("escritorio");
const control5=document.getElementById("estanteria");
const control6=document.getElementById("inodoro");
const control7=document.getElementById("mesa");
const control8=document.getElementById("perchero");

if(document.getElementById("silla")){
    control1.addEventListener('click', () => {
        cargarProducto(silla);
    });
}

if(document.getElementById("armario")){
    control2.addEventListener('click', () => {
        cargarProducto(armario);
    });
}

if(document.getElementById("encimera")){
    control3.addEventListener('click', () => {
        cargarProducto(encimera);
    });
}

if(document.getElementById("escritorio")){
    control4.addEventListener('click', () => {
        cargarProducto(escritorio);
    });
}

if(document.getElementById("estanteria")){
    control5.addEventListener('click', () => {
        cargarProducto(estanteria);
    });
}

if(document.getElementById("inodoro")){
    control6.addEventListener('click', () => {
        cargarProducto(inodoro);
    });
}

if(document.getElementById("mesa")){
    control7.addEventListener('click', () => {
        cargarProducto(mesa);
    });
}

if(document.getElementById("perchero")){
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
