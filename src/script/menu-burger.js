document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const logo = document.querySelector('.w7-mobile'); // Seleciona a nova logo
    const nav = document.querySelector('nav.mobile'); // Seleciona a nav

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Alterna a classe "active"
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled'); // Adiciona a classe "scrolled" à nav
            navLinks.classList.add('scrolled'); // Adiciona a classe "scrolled" aos links
            logo.style.display = 'none'; // Esconde a logo
        } else {
            nav.classList.remove('scrolled'); // Remove a classe "scrolled" da nav
            navLinks.classList.remove('scrolled'); // Remove a classe "scrolled" dos links
            logo.style.display = 'block'; // Mostra a logo
        }
    });
});
