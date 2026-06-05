import { silla, mesa, escritorio, estanteria, encimera, armario, inodoro, perchero} from "./productos.js";

export function ponerNombre(productos){
    const boton = document.querySelectorAll(".boton");
        
    for (let i=0; i<boton.length; i++){
        boton[i].textContent=productos[i].nombre;
    }
}

export function ventanaPro(productos){
    localStorage.getItem("productoSeleccionado", JSON.stringify(productos));
    window.location.href="descripciones.html";
}