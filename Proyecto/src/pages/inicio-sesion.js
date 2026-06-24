export function initInicio() {
    const form = document.getElementById("inicioForm");

    if (!form) return;

    console.log("🔥 Inicio de sesión inicializado");

    const btnRegistro = document.getElementById("btnRegistro");

    if (btnRegistro) {
        btnRegistro.addEventListener("click", () => {
            window.location.href = "/registro";
        });
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const datos = {
            email: document.getElementById("initEmail").value,
            contrasena: document.getElementById("initPassword").value
        };

        const res = await fetch("http://localhost:8080/inicio-sesion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });

        const resultado = await res.json();

        if (resultado.ok) {
            window.location.href = "/index";
        } else {
            alert(resultado.mensaje);
        }
    });
}