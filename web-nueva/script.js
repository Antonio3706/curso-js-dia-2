// Script.js - Funcionalidad básica para la web

document.addEventListener('DOMContentLoaded', () => {
    // Script para el menú móvil (si decides implementarlo)
    // const mobileMenuButton = document.querySelector('.mobile-menu-button');
    // const navMenu = document.querySelector('nav ul');

    // if (mobileMenuButton && navMenu) {
    //     mobileMenuButton.addEventListener('click', () => {
    //         navMenu.classList.toggle('active');
    //     });
    // }

    // Enlaces de scroll suave (ejemplo si tuvieras secciones con id's)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Lógica básica para la página de producto (ejemplo)
    const addToCartButton = document.getElementById('add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            const quantityInput = document.getElementById('product-quantity');
            const quantity = parseInt(quantityInput.value, 10) || 1;
            alert(`¡Añadido al carrito! Cantidad: ${quantity}`);
            // Aquí iría la lógica real para añadir al carrito (API, localStorage, etc.)
        });
    }

});

// Función de ejemplo para simular una búsqueda (si fuera necesario)
function performSearch() {
    const searchInput = document.querySelector('.header-actions input[type="text"]');
    const query = searchInput.value.trim();
    if (query) {
        alert(`Buscando: "${query}"`);
        // Aquí se redirigiría a una página de resultados o se mostrarían dinámicamente
        // window.location.href = `productos.html?search=${encodeURIComponent(query)}`;
    } else {
        alert('Por favor, introduce un término de búsqueda.');
    }
}

// Asignar la función de búsqueda a un botón si existe
const searchButton = document.querySelector('.header-actions .btn-primary');
if (searchButton) {
    searchButton.addEventListener('click', performSearch);
    // Opcional: buscar al presionar Enter en el input
    const searchInput = document.querySelector('.header-actions input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}
