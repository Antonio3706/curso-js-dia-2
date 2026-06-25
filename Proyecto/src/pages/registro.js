
export function initRegistro() {

    console.log("🔥 initRegistro ejecutada");

    const form = document.getElementById("registroForm");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const datos = {
            nombre: document.getElementById("inNombre").value,
            apellidos: document.getElementById("inApellidos").value,
            email: document.getElementById("inRegEmail").value,
            contrasena: document.getElementById("inRegContr").value,
            contrasena2: document.getElementById("inRegContr2").value
        };

        const res = await fetch("/registro", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        });

        const resultado = await res.json();

        console.log(resultado);

        if (resultado.ok) {
            window.location.href = "/inicio-sesion";
        } else {
            alert(resultado.msg);
        }
    });
}