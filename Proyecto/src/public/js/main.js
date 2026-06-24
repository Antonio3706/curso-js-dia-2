import { mostrarOpcionesBusqueda, alternarOpcionesBusqueda, botonesCategoria, botonesMarca, ventanaCarrito, ventanaPerfil } from "./funciones.js";
console.log("ANTES");

import { initCarrito } from "../carrito.js";
import { initRegistro } from "../registro.js";
import { initInicio } from "../inicio-sesion.js";
import { initIndex } from "../index.js";
import { initDescripcion } from "../descripciones.js";

document.addEventListener("DOMContentLoaded", () => {

    const page = document.body.dataset.page;
    console.log("PAGE DETECTED:", page);
    
    switch (page) {
        case "registro":
            initRegistro();
            break;

        case "inicio-sesion":
            initInicio();
            break;

        case "carrito":
            initCarrito();
            break;
    
        case "index":
            initIndex();
            break;

        case "descripciones":
            initDescripcion();
            break;
    }
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
/*
botonesCategoria(prod);
botonesMarca(prod);

window.addEventListener("DOMContentLoaded", () =>{
    ventanaCarrito();
});

window.addEventListener("DOMContentLoaded", () =>{
    ventanaPerfil();
});*/



