const entradaTexto = document.querySelector('#text-input');
const texto = document.querySelector('#meme-text').innerHTML;


entradaTexto.addEventListener('keyup', () => {
    texto = entradaTexto.value;
});
