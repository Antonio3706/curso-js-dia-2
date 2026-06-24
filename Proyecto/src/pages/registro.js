export function initRegistro() {

    const form = document.getElementById("registroForm");

    if (!form) return;

    console.log("🔥 Registro inicializado");

    const btn = document.getElementById("btnRegistrarse");

    if (!btn) return;

    btn.addEventListener("click", () => {
        window.location.href = "/inicio-sesion";
    });

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const datos = {
            nombre: document.getElementById("inNombre").value,
            apellidos: document.getElementById("inApellidos").value,
            email: document.getElementById("inRegEmail").value,
            contrasena: document.getElementById("inRegContr").value,
            contrasena2: document.getElementById("inRegContr2").value
        };

        const res = await fetch("http://localhost:8080/registro", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        });

        console.log(await res.json());
    });
}