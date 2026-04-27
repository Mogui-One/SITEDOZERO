document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementaryById("meuBotao");

    botao.addEventListener("click", function() {
        alert("O botão foi clicado!");
    });
});