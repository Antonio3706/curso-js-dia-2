

export async function initIndex() {

    const botones = document.querySelectorAll(".boton");

    const res = await fetch("/api/productos");
    const productos = await res.json();

    console.log("botones:", botones);
    console.log("productos:", productos);

    botones.forEach((btn, i) => {

        if (!productos[i]) return;

        btn.textContent = productos[i].nombre;

        btn.onclick = () => {
            window.location.href = `/descripciones?id=${productos[i].id}`;
        };
    });
}