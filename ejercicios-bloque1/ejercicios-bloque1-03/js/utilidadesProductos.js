import { productos } from "./productos";

export function contarProductos(productos){
    return ("Hay "+productos.length+" a la venta.");
}

export function calcularPrecioTotal(productos){
    const total=0;
    productos.array.forEach(producto => {
        total+=producto.precio;
    });
    return ("El total es "+total+"€.");
}

export function obtenerNombres(productos){
    const nombres="";
    let contador=0;
    while(contador<productos.length){
        //Hacerlo como un array
        nombres+=(productos[contador].nombre+", ");
        contador++;
    }
    return ("Nombres: "+nombres);
}

export function crearTextoResumen(productos){
    return 'Los productos son: ${obtenerNombres} y en total valen ${calcularPrecioTotal}€.';
}