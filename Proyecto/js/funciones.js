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
    document.getElementById("precio").textContent="Precio: " + producto.precio + " €";
    document.getElementById("descripcion").textContent=producto.descripcion;
    document.getElementById("categoria").textContent="Categoria: " + producto.categoria;
    document.getElementById("imagen").src=producto.imagen;
}

export function mostrarOpcionesBusqueda(){
    const btnSubmenu=document.getElementById("despliegue-opciones-busqueda");
    const submenu=document.getElementById("submenu");

    btnSubmenu.addEventListener("click", () => {
        submenu.classList.toggle("mostrar");
    });
}

export function alternarOpcionesBusqueda(mostrarId, ocultarId1, ocultarId2, botonId){
    const boton = document.getElementById(botonId);
    const mostrar = document.getElementById(mostrarId);
    const ocultar1 = document.getElementById(ocultarId1);
    const ocultar2 = document.getElementById(ocultarId2);

    boton.addEventListener("click", () => {
        mostrar.classList.toggle("mostrar");
        ocultar1.classList.remove("mostrar");
        ocultar2.classList.remove("mostrar");
    });

}