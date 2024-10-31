window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav.desktop'); 
    const logo = document.querySelector('.logo img'); 
    const links = nav.querySelectorAll('a'); // Seleciona todos os links dentro da nav
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); 
        nav.classList.add('scrolled'); 
        logo.classList.add('hidden'); 
        
        links.forEach(link => {
            link.classList.add('scrolled'); // Adiciona a classe "scrolled" a cada link
        });
    } else {
        header.classList.remove('scrolled'); 
        nav.classList.remove('scrolled'); 
        logo.classList.remove('hidden'); 
        
        links.forEach(link => {
            link.classList.remove('scrolled'); // Remove a classe "scrolled" de cada link
        });
    }
});
