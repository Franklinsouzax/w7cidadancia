function toggleTexto() {
    const ocultos = document.querySelectorAll('.oculto');
    ocultos.forEach(paragrafo => {
        paragrafo.classList.toggle('hidden');
    });
}