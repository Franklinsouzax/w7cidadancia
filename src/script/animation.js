document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card-sessao-2');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const index = Array.from(cards).indexOf(card);
                card.style.setProperty('--delay', `${index * 0.2}s`); // Define o atraso
                card.classList.add('fade-in'); // Adiciona a classe para animar
                observer.unobserve(card); // Para observar o card após a animação
            }
        });
    }, options);

    cards.forEach(card => {
        observer.observe(card);
    });
});
