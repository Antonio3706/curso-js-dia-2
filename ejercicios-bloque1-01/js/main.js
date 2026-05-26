import { calcularPrecioConIva } from "./calculadora.js";
    const boton = document.querySelector("#btn-calcular");
    const resultado = document.querySelector("#resultado");
    const precioBase = 120;
    const iva = 21;
    boton.addEventListener('click', () => {
        const precioFinal = calcularPrecioConIva(precioBase, iva);
        resultado.textContent = `El precio final es ${precioFinal} €`;
});
