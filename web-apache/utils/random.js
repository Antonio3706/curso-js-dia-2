export function elegirAleatorio(lista) {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}
