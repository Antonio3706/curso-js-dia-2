import { silla, mesa, escritorio, armario, inodoro, encimera, estanteria, perchero } from "./productos.js";
import { ponerNombreSilla, ponerNombreArmario, ponerNombreEncimera, ponerNombreEscritorio, ponerNombreEstanteria, ponerNombreInodoro, ponerNombreMesa, ponerNombrePerchero } from "./funciones.js";  
    
const control1=document.getElementById("btnSilla");
const control2=document.getElementById("btnArmario");
const control3=document.getElementById("btnEncimera");
const control4=document.getElementById("btnEscritorio");
const control5=document.getElementById("btnEstanteria");
const control6=document.getElementById("btnInodoro");
const control7=document.getElementById("btnMesa");
const control8=document.getElementById("btnPerchero");

control1.addEventListener('click', () => {
    ponerNombreSilla(silla);
});

control2.addEventListener('click', () => {
    ponerNombreArmario(silla);
});

control3.addEventListener('click', () => {
    ponerNombreEncimera(silla);
});

control4.addEventListener('click', () => {
    ponerNombreEscritorio(silla);
});

control5.addEventListener('click', () => {
    ponerNombre(silla);
});

control6.addEventListener('click', () => {
    ponerNombre(silla);
});

control7.addEventListener('click', () => {
    ponerNombre(silla);
});

control8.addEventListener('click', () => {
    ponerNombre(silla);
});
