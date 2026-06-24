import { initMenu, crearBotonesFiltro } from "../public/js/funciones.js";

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

        botones: {
            inicio: document.getElementById("btnInicio"),
            marcas: document.getElementById("btnMarcas"),
            categorias: document.getElementById("btnCategorias")
        },

        onInicio: (productos) => {
            ponerNombre(productos);
            ventanaPro(productos);
        },

        onMarca: (productos) => {
            crearBotonesFiltro({
                productos,
                campo: "marca",
                contenedorId: "marcas",

                onFiltrar: (filtrados) => {
                    ponerNombre(filtrados);
                    ventanaPro(filtrados);
                }
            });
        },

        onCategoria: (productos) => {
            crearBotonesFiltro({
                productos,
                campo: "categoria",
                contenedorId: "categorias",

                onFiltrar: (filtrados) => {
                    ponerNombre(filtrados);
                    ventanaPro(filtrados);
                }
            });
        }
    });
}