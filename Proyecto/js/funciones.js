import { silla } from "./productos.js";

export function ponerNombre(silla){
    const botonSilla = document.querySelectorAll(".boton");
        
    for (let i=0; i<botonSilla.length; i++){
        botonSilla[i].textContent=silla[i].nombre;
    }
}
