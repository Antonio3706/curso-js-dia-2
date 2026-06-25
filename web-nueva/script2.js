// Scripts generales de la página (podrías tener esto ya)

// Ejemplo: Lógica para el menú móvil (si no lo tienes)
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle'); // Asegúrate de tener un botón para esto
const navUl = document.querySelector('nav ul');

if (mobileMenuToggle && navUl) {
    mobileMenuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });
}

// Lógica para la navegación activa (si no la tienes)
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});


// --- Scripts Específicos para la Página de Producto Detalle (ya incluidos en el HTML) ---
// Si prefieres tener todo en el script.js, puedes mover el bloque <script> de producto-detalle.html aquí.
/*
document.addEventListener('DOMContentLoaded', () => {
    // Lógica para el carrusel de miniaturas (si se implementa)
    const thumbnails = document.querySelectorAll('.thumbnail-gallery img');
    const mainImage = document.querySelector('.main-product-image');

    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                // Asegúrate de que la URL de la imagen principal se construya correctamente
                // Ejemplo: Si la miniatura es 'images/gpu-thumb1.png', la principal podría ser 'images/gpu-large1.png' o similar.
                // Aquí se asume un patrón simple de reemplazo, ajústalo si es necesario.
                const mainImageUrl = thumb.src.replace('-thumb', '-large').replace('thumb', ''); // Ajusta esta lógica según tu naming convention
                mainImage.src = mainImageUrl;
                mainImage.alt = thumb.alt;
            });
        });
    }

    // Lógica para las pestañas
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content .tab');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover 'active' de todos los botones y contenidos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Añadir 'active' al botón clickeado y su contenido correspondiente
            button.classList.add('active');
            document.getElementById(button.getAttribute('data-tab')).classList.add('active');
        });
    });

    // Lógica simple para la calificación de estrellas en el formulario de reseña
    const ratingInputs = document.querySelectorAll('.rating-input input[type="radio"]');
    ratingInputs.forEach(input => {
        input.addEventListener('change', () => {
            // Simplemente actualiza la selección, la visualización la maneja el CSS
        });
    });
});
*/
