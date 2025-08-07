document.addEventListener("DOMContentLoaded", function() {
    // --- Funcionalidad del Menú Hamburguesa ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }

    // --- Animación al Hacer Scroll ---
    const elementosAnimados = document.querySelectorAll('.modelo, .caracteristica-item, .testimonio');

    function mostrarElemento(elemento) {
        elemento.classList.add('mostrar');
    }

    function revisarElementos() {
        elementosAnimados.forEach(elemento => {
            if (elemento.getBoundingClientRect().top < window.innerHeight * 0.8) {
                mostrarElemento(elemento);
            }
        });
    }

    // Ejecutar la función al cargar la página y al hacer scroll
    window.addEventListener('load', revisarElementos);
    window.addEventListener('scroll', revisarElementos);

    // --- Smooth Scrolling para los Enlaces del Menú ---
    const enlacesMenu = document.querySelectorAll('nav a[href^="#"]');

    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function(evento) {
            evento.preventDefault();

            const destino = document.querySelector(this.getAttribute('href'));

            destino.scrollIntoView({
                behavior: 'smooth'
            });

            // Cierra el menú hamburguesa después de hacer clic en un enlace (opcional)
            if (menuToggle && navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        });
    });

    // --- Mostrar/Ocultar el Menú al Hacer Scroll (Opcional) ---
    let ultimoScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        let scrollActual = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollActual > ultimoScroll) {
            // Scroll hacia abajo
            header.classList.add('ocultar');
        } else {
            // Scroll hacia arriba
            header.classList.remove('ocultar');
        }

        ultimoScroll = scrollActual;
    });
});

