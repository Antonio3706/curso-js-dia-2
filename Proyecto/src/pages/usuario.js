export function initUsuario() {
    const btn = document.querySelectorAll(".boton");

    if (!btn) return;

    btn.addEventListener("click", () => {
        window.location.href = "/usuario";
    });
}