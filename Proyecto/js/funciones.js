import { silla, mesa, escritorio, estanteria, encimera, armario, inodoro, perchero} from "./productos.js";

function ponerNombre(productos){
    const boton = document.querySelectorAll(".boton");
        
    for (let i=0; i<boton.length; i++){
        boton[i].textContent=productos[i].nombre;
    }
}

function ventanaPro(productos){
    const botones=document.querySelectorAll(".boton");
    for (let i=0; i<botones.length; i++){
        botones[i].textContent=productos[i].nombre;
        botones[i].addEventListener("click",()=>{
            console.log(productos[i]);
            localStorage.setItem("prodSelec", JSON.stringify(productos[i]));
            window.location.href="descripciones.html";
        });
    }
}

export function cargarProducto(productos){
    ponerNombre(productos);
    ventanaPro(productos);
}

export function ponerInformacion(){

    console.log(localStorage.getItem("prodSelec"));

    const producto=JSON.parse(
        localStorage.getItem("prodSelec")
    );
    if(!producto) return;

    console.log(document.getElementById("nombrePro"));

    document.getElementById("nombrePro").textContent=producto.nombre;
    document.getElementById("precio").textContent=producto.precio + " €";
    document.getElementById("descripcion").textContent=producto.descripcion;
    document.getElementById("categoria").textContent=producto.categoria;

}