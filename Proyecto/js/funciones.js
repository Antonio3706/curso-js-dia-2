import { silla, mesa, escritorio, estanteria, encimera, armario, inodoro, perchero} from "./productos.js";

export function ponerNombre(productos){
    const boton = document.querySelectorAll(".boton");
        
    for (let i=0; i<boton.length; i++){
        boton[i].textContent=productos[i].nombre;
    }
}

export function ventanaPro(productos){
    const botones=document.querySelectorAll(".boton");
    for (let i=0; i<botones.length; i++){
        botones[i].textContent=productos[i].nombre;
        botones[i].addEventListener("click",()=>{
            localStorage.setItem("prodSelec", JSON.stringify(productos[i]));
            window.location.href="descripciones.html";
        });
    }
}

export function ponerInformacion(){

}