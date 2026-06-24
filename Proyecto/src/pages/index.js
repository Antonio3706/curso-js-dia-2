

export async function initIndex() {

    const botones = document.querySelectorAll(".boton");

    const res = await fetch("/api/productos");
    const productos = await res.json();

    botones.forEach((btn, i) => {

        if (!productos[i]) return;

        btn.textContent = productos[i].nombre;

        btn.addEventListener("click", () => {
            window.location.href = `/descripciones?id=${productos[i].id}`;
        });
    });
}