export function initCarrito() {

    const cuerpoTabla =
        document.getElementById("cuerpoTabla");

    if (!cuerpoTabla) return;

    const carrito =
        JSON.parse(localStorage.getItem("carrito")) || [];

    cuerpoTabla.innerHTML = "";

    carrito.forEach(producto => {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.precio}€</td>
        `;

        cuerpoTabla.appendChild(fila);
    });
}