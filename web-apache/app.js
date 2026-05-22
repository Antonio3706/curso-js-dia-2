import { tecnologias } from './data/tecnologias.js';
import { crearTarjetaTecnologia } from './utils/dom.js';
const contenedor = document.querySelector('#contenedor-tecnologias');
for (const tecnologia of tecnologias) {
const tarjeta = crearTarjetaTecnologia(tecnologia);
}