import { silla, mesa, escritorio, estanteria, encimera, armario, inodoro, perchero} from "./productos.js";

export function ponerNombreSilla(silla){
    const boton = document.querySelectorAll(".boton");
        
    for (let i=0; i<boton.length; i++){
        boton[i].textContent=silla[i].nombre;
    }
}

export function ponerNombreMesa(mesa){
    const boton = document.querySelectorAll(".boton");
        
    for (let i=0; i<boton.length; i++){
        boton[i].textContent=mesa[i].nombre;
    }
}

export function ponerNombreEscritorio(escritorio){
    const boton = document.querySelectorAll(".boton");
        
    for (let i=0; i<boton.length; i++){
        boton[i].textContent=escritorio[i].nombre;
    }
}

export function ponerNombreEstanteria(estanteria){
    const boton = document.querySelectorAll(".boton");
        
    for (let i=0; i<boton.length; i++){
        boton[i].textContent=estanteria[i].nombre;
    }
}

export function ponerNombreEncimera(encimera){
    const boton = document.querySelectorAll(".boton");
        
    for (let i=0; i<boton.length; i++){
        boton[i].textContent=encimera[i].nombre;
    }
}

export function ponerNombreArmario(armario){
    const boton = document.querySelectorAll(".boton");
        
    for (let i=0; i<boton.length; i++){
        boton[i].textContent=armario[i].nombre;
    }
}

export function ponerNombreInodoro(inodoro){
    const boton = document.querySelectorAll(".boton");
        
    for (let i=0; i<boton.length; i++){
        boton[i].textContent=inodoro[i].nombre;
    }
}

export function ponerNombrePerchero(perchero){
    const boton = document.querySelectorAll(".boton");
        
    for (let i=0; i<boton.length; i++){
        boton[i].textContent=perchero[i].nombre;
    }
}
