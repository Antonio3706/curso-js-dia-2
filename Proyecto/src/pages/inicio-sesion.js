export function initInicio() {
    const btn = document.getElementById("btnRegistrarse");

    if (!btn) return;

    btn.addEventListener("click", () => {
        window.location.href = "/inicio-sesion";
    });
}