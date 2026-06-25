console.log("ANTES");

import { initRegistro } from "../registro.js";
import { initInicio } from "../inicio-sesion.js";
import { initIndex } from "../index.js";
import { initDescripcion } from "../descripciones.js";

document.addEventListener("DOMContentLoaded", () => {

    const page = document.body.dataset.page;
    console.log("PAGE DETECTED:", page);
    
    switch (page) {
        case "registro":
            initRegistro();
            break;

        case "inicio-sesion":
            initInicio();
            break;

        case "index":
            initIndex();
            break;

        case "descripciones":
            initDescripcion();
            break;
    }
});
