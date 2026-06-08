import { silla, mesa, escritorio, armario, inodoro, encimera, estanteria, perchero } from "./productos.js";
import { ponerNombre, ventanaPro, ponerInformacion } from "./funciones.js";

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
        ponerNombre(silla);
    });
}

if(document.getElementById("armario")){
    control2.addEventListener('click', () => {
        ponerNombre(armario);
    });
}

if(document.getElementById("encimera")){
    control3.addEventListener('click', () => {
        ponerNombre(encimera);
    });
}

if(document.getElementById("escritorio")){
    control4.addEventListener('click', () => {
        ponerNombre(escritorio);
    });
}

if(document.getElementById("estanteria")){
    control5.addEventListener('click', () => {
        ponerNombre(estanteria);
    });
}

if(document.getElementById("inodoro")){
    control6.addEventListener('click', () => {
        ponerNombre(inodoro);
    });
}

if(document.getElementById("mesa")){
    control7.addEventListener('click', () => {
        ponerNombre(mesa);
    });
}

if(document.getElementById("perchero")){
    control8.addEventListener('click', () => {
        ponerNombre(perchero);
    });
}

ventanaPro(silla);
ventanaPro(mesa);
ventanaPro(inodoro);
ventanaPro(encimera);
ventanaPro(escritorio);
ventanaPro(estanteria);
ventanaPro(perchero);
ventanaPro(armario);

window.addEventListener("DOMContentLoaded", () =>{
    ponerInformacion();
});
