import { alumno, crearTextoAlumno } from "./alumno.js";
    const resultado = document.querySelector("#resultado");
    const texto=crearTextoAlumno(alumno);
    resultado.textContent = texto;
