//este js es solo para probar los códigos


import { silla } from "./productos.js";
    

    const nombreBtn ="boton";
    let nombreBtnNew;

    for(let i=0; i<silla.length;){
        i++;
        let numero=i.toString();
        nombreBtnNew=nombreBtn+numero;
        console.log(nombreBtnNew);
    }
