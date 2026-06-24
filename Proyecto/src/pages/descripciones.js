export async function initDescripcion() {

    const id = window.location.pathname.split("/").pop();

    const res = await fetch(`/api/productos/${id}`);
    const productos = await res.json();

    document.getElementById("nombrePro").textContent =productos.nombre;

    document.getElementById("precio").textContent =productos.precio + " €";

    document.getElementById("categoria").textContent =productos.tipo;

    document.getElementById("descripcion").textContent =productos.descripcion;

    document.getElementById("imagen").src = productos.imagen;
}