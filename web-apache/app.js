import { frases } from "./data/frases.js";
import { elegirAleatorio } from "./utils/random.js";
const parrafoFrase = document.querySelector("#frase");
const botonFrase = document.querySelector("#boton-frase");
function mostrarFrase() {
    const frase = elegirAleatorio(frases);
    parrafoFrase.textContent = frase;
}
botonFrase.addEventListener("click", mostrarFrase);
mostrarFrase(); // Mostrar una al cargar la página