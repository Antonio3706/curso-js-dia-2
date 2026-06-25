
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
export function crearBotonesFiltro({
    productos,
    campo,
    contenedorId,
    onClick
}) {

    const contenedor = document.getElementById(contenedorId);

    if (!contenedor) return;

    contenedor.innerHTML = "";

    const valores = [...new Set(productos.map(p => p[campo]))];

    valores.forEach(valor => {

        const boton = document.createElement("button");
        boton.textContent = valor;

        boton.addEventListener("click", () => {

            const filtrados = productos.filter(
                p => p[campo] === valor
            );

            onClick?.(filtrados, valor);
        });

        contenedor.appendChild(boton);
    });
}

export function initMenu({
    productos,
    btnInicioId,
    btnMarcasId,
    btnCategoriasId,
    onInicio,
    onMarca,
    onCategoria
}) {

    const btnInicio = document.getElementById(btnInicioId);
    const btnMarcas = document.getElementById(btnMarcasId);
    const btnCategorias = document.getElementById(btnCategoriasId);

    btnInicio?.addEventListener("click", () => {
        onInicio?.(productos);
    });

    btnMarcas?.addEventListener("click", () => {
        onMarca?.(productos);
    });

    btnCategorias?.addEventListener("click", () => {
        onCategoria?.(productos);
    });
}

export function initNavegacion(idBoton, ruta) {

    const btn = document.getElementById(idBoton);

    if (!btn) return; // sale de la función si no existe

    btn.addEventListener("click", () => {
        window.location.href = ruta;
    });
}