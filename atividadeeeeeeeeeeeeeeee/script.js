function verificarAcesso() {
    const numeroCartao = parseInt(document.getElementById('numeroCartao').value);
    const mensagemElement = document.getElementById('mensagemAcesso');

    if (numeroCartao >= 1000 && numeroCartao <= 1999) {
        mensagemElement.textContent = 'Acesso total a todas as areas restritas.';
    } else if (numeroCartao >= 2000 && numeroCartao <= 2999) {
        mensagemElement.textContent = 'Acesso limitado a algumas areas restritas.';
    } else if (numeroCartao > 3000) {
        mensagemElement.textContent = 'Acesso negado. Sem permissao para acessar areas restritas.';
    } else {
        mensagemElement.textContent = 'Numero de cartao invalido.';
    }
}