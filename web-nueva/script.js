document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling para enlaces internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula la posición del objetivo. Suma el desplazamiento del header si está fijo.
                const headerOffset = document.querySelector('header')?.offsetHeight || 0;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Lógica básica para activar el enlace de "Inicio" al cargar la página (si es la página principal)
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        const homeLink = document.querySelector('a.nav-link[href="index.html"]');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    }

    // Ejemplo: Mostrar/Ocultar menú en móvil (opcional, si se implementa un botón de menú)
    // const menuButton = document.querySelector('.menu-toggle'); // Asume que tienes un botón con esta clase
    // const nav = document.querySelector('nav ul');
    // if (menuButton && nav) {
    //     menuButton.addEventListener('click', () => {
    //         nav.classList.toggle('active');
    //     });
    // }

    // Ejemplo: Validación simple del formulario de contacto
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Por favor, completa todos los campos obligatorios.');
                e.preventDefault(); // Detiene el envío del formulario
            } else if (!validateEmail(email)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                e.preventDefault();
            }
            // Si pasa las validaciones, el formulario se enviará
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Animaciones sutiles al hacer scroll (opcional)
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Deja de observar una vez que es visible
            }
        });
    }, {
        threshold: 0.1 // Activa cuando el 10% del elemento es visible
    });

    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll-hidden'); // Clase inicial oculta
        observer.observe(el);
    });

    // Añade esta clase a los elementos que quieres animar
    // Ejemplo: <div class="product-card animate-on-scroll">...</div>
    // Y en CSS:
    // .animate-on-scroll-hidden { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease-out, transform 0.5s ease-out; }
    // .animate-on-scroll.visible { opacity: 1; transform: translateY(0); }

});
