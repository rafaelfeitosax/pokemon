function enviarResposta() {
    const select = document.getElementById('pokemon-select');
    const pokemonSelecionado = select.value;
    const respostaCorreta = 'charizard';
    const divResposta = document.getElementById('resposta');
    const imagemCorreta = document.getElementById('imagem-correta');

    // Verifica se a resposta é correta ou não
    if (pokemonSelecionado === respostaCorreta) {
        divResposta.textContent = "Parabéns! Você acertou!";
        divResposta.style.color = 'green';
        
        // Mostra a imagem se a resposta for correta
        imagemCorreta.style.display = 'block';
    } else {
        divResposta.textContent = "Você errou! Tente novamente.";
        divResposta.style.color = 'red';
        
        // Oculta a imagem se a resposta estiver errada
        imagemCorreta.style.display = 'none';
    }
}
