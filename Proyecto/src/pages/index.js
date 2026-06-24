import { initMenu, crearBotonesFiltro } from "../js/funciones.js";

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
                campo: "marca",
                contenedorId: "marcas",

                onFiltrar: (filtrados) => {
                    ponerNombre(filtrados);
                    ventanaPro(filtrados);
                }
            });
        },

        onCategoria: (productos) => {

            document.getElementById("marcas").innerHTML = "";

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