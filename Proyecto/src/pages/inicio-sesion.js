export function initInicio() {

    console.log("🔥 initInicio ejecutada");

    const form = document.getElementById("inicioForm");
    const btnRegistro = document.getElementById("btnRegistro");

    if (btnRegistro) {
        btnRegistro.addEventListener("click", () => {
            window.location.href = "/registro";
        });
    }

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("🔥 SUBMIT EJECUTADO");
        
        const datos = {
            email: document.getElementById("initEmail").value,
            contrasena: document.getElementById("initPassword").value
        };

        const res = await fetch("/inicio-sesion", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        });

        const resultado = await res.json();

        console.log(resultado);

        if (resultado.ok) {
            window.location.href = "/index";
        } else {
            alert(resultado.mensaje);
        }
    });
}