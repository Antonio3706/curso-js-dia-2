import { silla, mesa, escritorio, armario, inodoro, encimera, estanteria, perchero } from "./productos.js";
//import { ponerNombreSilla, ponerNombreArmario, ponerNombreEncimera, ponerNombreEscritorio, ponerNombreEstanteria, ponerNombreInodoro, ponerNombreMesa, ponerNombrePerchero } from "./funciones.js";  
import { ponerNombre } from "./funciones.js";

const botonesMenu=document.querySelectorAll(".menu-lateral button");
botonesMenu.forEach(boton =>{
    boton.addEventListener("click",()=>{
        ponerNombre(boton.id);
    });
});
/*const control1=document.getElementById("btnSilla");
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
    ponerNombreArmario(armario);
});

control3.addEventListener('click', () => {
    ponerNombreEncimera(encimera);
});

control4.addEventListener('click', () => {
    ponerNombreEscritorio(escritorio);
});

control5.addEventListener('click', () => {
    ponerNombreEstanteria(estanteria);
});

control6.addEventListener('click', () => {
    ponerNombreInodoro(inodoro);
});

control7.addEventListener('click', () => {
    ponerNombreMesa(mesa);
});

control8.addEventListener('click', () => {
    ponerNombrePerchero(perchero);
});*/
