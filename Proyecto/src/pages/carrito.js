export function initCarrito() {
    const btn = document.getElementById("btnCarrito");

    if (!btn) return;

    btn.addEventListener("click", () => {
        window.location.href = "/carrito";
    });
}