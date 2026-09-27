document.addEventListener('DOMContentLoaded', () => {
    // === LÓGICA DEL MENÚ MÓVIL ===
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    // Alternar menú al hacer clic en el botón
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    // Ocultar el menú móvil cuando se hace clic en un enlace
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });

    // === LÓGICA DEL SLIDER DE FONDO ===
    const slides = document.querySelectorAll('#hero-slider > div.bg-cover');
    let currentSlide = 0;

    function nextSlide() {
        if(slides.length === 0) return; // Por si no encuentra imágenes

        // Quitar visibilidad al slide actual
        slides[currentSlide].classList.remove('opacity-100');
        slides[currentSlide].classList.add('opacity-0');
        
        // Calcular cuál es el siguiente slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Dar visibilidad al nuevo slide
        slides[currentSlide].classList.remove('opacity-0');
        slides[currentSlide].classList.add('opacity-100');
    }

    // Cambiar de imagen automáticamente cada 4000 milisegundos (4 segundos)
    if (slides.length > 0) {
        setInterval(nextSlide, 4000);
    }
});