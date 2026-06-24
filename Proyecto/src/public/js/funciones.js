
//Funciones para el submenu con diferentes tipos de busqueda.
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

//Funcion para crear la lista del carrito.
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

//Despliegue de los tipos de busqueda del submenu.
export function botonesCategoria(prod){
    const cat=[...new Set(prod.map(p=>p.categoria).filter(c => c && c.trim() !== ""))];
    const contenedor=document.getElementById("categorias");
    contenedor.innerHTML = ""; 

    cat.forEach(categoria => {
        const boton=document.createElement("button");

        boton.textContent=categoria;
        
        boton.addEventListener("click", () =>{
            const filtrados = prod.filter(p => p.categoria === categoria);
            console.log(filtrados);
        });
        contenedor.appendChild(boton);
    });

}

export function botonesMarca(prod){
    const cat=[...new Set(prod.map(p=>p.nombre).filter(Boolean))];
    const contenedor=document.getElementById("marcas");
    contenedor.innerHTML = ""; 
    
    cat.forEach(nombre => {
        const boton=document.createElement("button");

        boton.textContent=nombre;
        
        boton.addEventListener("click", () =>{
            const filtrados = prod.filter(p => p.nombre === nombre);
            console.log(filtrados);
        });
        contenedor.appendChild(boton);
    });

}

//Para cambiar a las ventanas "carrito" o "usuario".
export function ventanaCarrito(){
    const boton=document.getElementById("btnCarrito");
        boton.addEventListener("click",()=>{
            window.location.href="/carrito";
        });
}

export function ventanaPerfil(){
    const boton=document.getElementById("btnUsuario");
        boton.addEventListener("click",()=>{
            window.location.href="/usuario";
        });
}