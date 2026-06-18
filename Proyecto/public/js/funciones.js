import { silla, mesa, escritorio, estanteria, encimera, armario, inodoro, perchero, prod} from "./productos.js";

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
            window.location.href="../html/descripciones.html";
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
export function logger(req, res, next){
    console.log(`[${new Date().toISOString()}]`);
    console.log(`${req.method} ${req.url}`);
    next();
}

export function añadirAlCarrito(producto){
    const cuerpo=document.getElementById("cuerpoTabla");

    const fila=document.createElement("tr");
    
    const columnaNombre=document.createElement("td");
    columnaNombre.textContent=producto.nombre;

    const columnaCat=document.createElement("td");
    columnaCat.textContent=producto.categoria;

    const columnaCant=document.createElement("td");
    columnaCant.textContent=1;

    const columnaPrecio=document.createElement("td");
    columnaPrecio.textContent=producto.precio + " €";
    
    fila.appendChild(columnaNombre);
    fila.appendChild(columnaCat);
    fila.appendChild(columnaCant);
    fila.appendChild(columnaPrecio);

    cuerpo.appendChild(fila);
}

export function botonesCategoria(producto){
    const cat=[...new Set(prod.map(p=>p.categoria).filter(c=>c))];
    const contenedor=document.getElementById("categorias");

    cat.forEach(categoria => {
        const boton=document.createElement("button");

        boton.textContent=categoria;
        
        boton.addEventListener("click", () =>{
            
        });
        contenedor.appendChild(boton);
    });

}

export function botonesMarca(producto){
    const cat=[...new Set(prod.map(p=>p.nombre).filter(c=>c))];
    const contenedor=document.getElementById("marcas");

    cat.forEach(nombre => {
        const boton=document.createElement("button");

        boton.textContent=nombre;
        
        boton.addEventListener("click", () =>{
            
        });
        contenedor.appendChild(boton);
    });

}