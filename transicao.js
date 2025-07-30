const botao = document.querySelector('.botao-entrar');

if (botao) {
    botao.addEventListener('click', function(event) {
        event.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = botao.href;
        }, 500);
    });
}
