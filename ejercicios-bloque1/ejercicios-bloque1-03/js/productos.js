// Array de objetos: todos tienen la misma forma
export const productos = [
    { nombre: 'Teclado', precio: 35, categoria: 'Informática', disponible:
    true },
    { nombre: 'Monitor', precio: 249, categoria: 'Informática', disponible:
    true },
    { nombre: 'Alfombrilla', precio: 12, categoria: 'Accesorios', disponible:
    false },
    { nombre: 'Rston', precio: 23, categoria: 'Informática', disponible:
    true },
    { nombre: 'Silla', precio: 100, categoria: 'Accesorios', disponible:
    false },
];
// Acceder al segundo elemento:
console.log(productos[1].nombre); // 'Monitor'
