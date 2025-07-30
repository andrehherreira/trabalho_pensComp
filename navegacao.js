document.querySelectorAll('.navegacao-filmes').forEach(container => {
    const linha = container.querySelector('.linha-filmes');
    const esquerda = container.querySelector('.esquerda');
    const direita = container.querySelector('.direita');

    if (esquerda && direita && linha) {
        esquerda.addEventListener('click', () => {
            linha.scrollBy({ left: -300, behavior: 'smooth' });
        });

        direita.addEventListener('click', () => {
            linha.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
});
