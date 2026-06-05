import { silla, mesa, escritorio, armario, inodoro, encimera, estanteria, perchero } from "./productos.js";
import { ponerNombre, ventanaPro } from "./funciones.js";

const control1=document.getElementById("silla");
const control2=document.getElementById("armario");
const control3=document.getElementById("encimera");
const control4=document.getElementById("escritorio");
const control5=document.getElementById("estanteria");
const control6=document.getElementById("inodoro");
const control7=document.getElementById("mesa");
const control8=document.getElementById("perchero");

control1.addEventListener('click', () => {
    ponerNombre(silla);
});

control2.addEventListener('click', () => {
    ponerNombre(armario);
});

control3.addEventListener('click', () => {
    ponerNombre(encimera);
});

control4.addEventListener('click', () => {
    ponerNombre(escritorio);
});

control5.addEventListener('click', () => {
    ponerNombre(estanteria);
});

control6.addEventListener('click', () => {
    ponerNombre(inodoro);
});

control7.addEventListener('click', () => {
    ponerNombre(mesa);
});

control8.addEventListener('click', () => {
    ponerNombre(perchero);
});

ventanaPro(silla);
ventanaPro(mesa);
ventanaPro(inodoro);
ventanaPro(encimera);
ventanaPro(escritorio);
ventanaPro(estanteria);
ventanaPro(perchero);
ventanaPro(armario);