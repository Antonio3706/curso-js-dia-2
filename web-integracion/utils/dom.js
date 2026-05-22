export function crearTarjetaTecnologia(tecnologia) {
    const article = document.createElement('article');
    article.classList.add('tarjeta');
    const titulo = document.createElement('h2');
    titulo.textContent = tecnologia.nombre;
    const tipo = document.createElement('p');
    tipo.classList.add('tipo');
    tipo.textContent = tecnologia.tipo;
    const desc = document.createElement('p');
    desc.textContent = tecnologia.descripcion;
    article.append(titulo, tipo, desc);
    return article;
}