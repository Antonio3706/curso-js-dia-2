export function initDescripciones() {
    const btn = document.querySelectorAll(".boton");

    if (!btn) return;

    btn.addEventListener("click", () => {
        window.location.href = "/descripciones";
    });
}