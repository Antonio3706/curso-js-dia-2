import { initMenu, crearBotonesFiltro, initNavegacion, mostrarOpcionesBusqueda, alternarOpcionesBusqueda } from "../js/funciones.js";

initNavegacion("btnCarrito", "/carrito");
initNavegacion("btnUsuario", "/usuario");

function ponerNombre(productos) {
    const botones = document.querySelectorAll(".boton");

    botones.forEach((boton, i) => {
        boton.textContent = productos[i].nombre;
    });
}

function ventanaPro(productos) {
    const botones = document.querySelectorAll(".boton");

    botones.forEach((boton, i) => {
        boton.addEventListener("click", () => {
            window.location.href = `/descripciones/${productos[i].id}`;
        });
    });
}

function filtrarPorTipo(productosTotales, tipo){

    const productosFiltrados = productosTotales.filter(
        producto => producto.tipo === tipo
    );

    ponerNombre(productosFiltrados);
    ventanaPro(productosFiltrados);
}

export async function initIndex(){

    const res = await fetch("/api/productos");
    const productos = await res.json();

    console.log(productos);

    // Mostrar todos al cargar
    ponerNombre(productos);
    ventanaPro(productos);

    const tipos = [
        "silla",
        "mesa",
        "escritorio",
        "armario",
        "inodoro",
        "encimera",
        "estanteria",
        "perchero"
    ];

    tipos.forEach(tipo => {

        const boton = document.getElementById(tipo);

        if(boton){

            boton.addEventListener("click", () => {
                filtrarPorTipo(productos, tipo);
            });

        }

    });
    
    initMenu({
        productos,

        btnInicioId: "btnInicio",
        btnMarcasId: "btnMarcas",
        btnCategoriasId: "btnCategorias",

        onInicio: (productos) => {

            ponerNombre(productos);
            ventanaPro(productos);

            document.getElementById("marcas").innerHTML = "";
            document.getElementById("categorias").innerHTML = "";
        },

        onMarca: (productos) => {

            document.getElementById("categorias").innerHTML = "";

            crearBotonesFiltro({
                productos,
                campo: "nombre",
                contenedorId: "marcas",
            });
        },

        onCategoria: (productos) => {

            document.getElementById("marcas").innerHTML = "";

            crearBotonesFiltro({
                productos,
                campo: "categoria",
                contenedorId: "categorias",
            });
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
    
}