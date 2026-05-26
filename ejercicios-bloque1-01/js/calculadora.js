export function calcularPrecioConIva(precioBase, iva) {
    const incremento = precioBase * iva / 100;
    const precioFinal = precioBase + incremento;
    return precioFinal;
}
