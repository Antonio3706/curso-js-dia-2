import { silla } from "./productos.js";
import { ponerNombre } from "./funciones.js";  
    
const control=document.getElementById("btnSilla");

control.addEventListener('click', () => {
    ponerNombre(silla);
});
