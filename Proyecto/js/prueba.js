//este js es solo para probar los códigos


import { silla, mesa, escritorio, estanteria, encimera, armario, inodoro, perchero} from "./productos.js";
    

function ventanaPro(productos){
    const botones=document.querySelectorAll(".boton");
    const producto=JSON.parse(
        localStorage.getItem("prodSelec")
    );
    for (let i=0; i<botones.length; i++){
        botones[i].textContent=productos[i].nombre;
        botones[i].addEventListener("click",()=>{
            localStorage.setItem("prodSelec", JSON.stringify(productos[i]));
            window.location.href="descripciones.html";
        });
        console.log(document.getElementById("nombrePro").textContent=producto.nombre);        
    }
};
