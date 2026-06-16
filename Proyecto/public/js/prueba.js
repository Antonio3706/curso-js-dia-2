//este js es solo para probar los códigos


import { silla, mesa, escritorio, estanteria, encimera, armario, inodoro, perchero} from "./productos.js";
    
/*    const botones=document.querySelectorAll(".boton");
    for (let i=0; i<botones.length; i++){
        botones[i].textContent=productos[i].nombre;
        botones[i].addEventListener("click",()=>{
            localStorage.setItem("prodSelec", JSON.stringify(productos[i]));
            window.location.href="descripciones.html";
        });
    }

function ponerInformacion(){
console.log(localStorage.getItem("prodSelec"));

    const producto=JSON.parse(
        localStorage.getItem("prodSelec")
    );
    console.log(producto);
}*/

const control1 = document.getElementById("silla");

console.log(control1);
