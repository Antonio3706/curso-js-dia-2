import { silla, mesa, escritorio, armario, inodoro, encimera, estanteria, perchero, prod } from "./productos.js";
import { cargarProducto, ponerInformacion, mostrarOpcionesBusqueda, alternarOpcionesBusqueda, botonesCategoria, botonesMarca } from "./funciones.js";


console.log(
    prod.filter(p => !p.categoria || p.categoria.trim() === "")
);