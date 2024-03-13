let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdernarPorPreco.isAscending = true;

btnOrdernarPorPreco.addEventListener('click', function() {
    this.isAscending = !this.isAscending // alterna o estado do botão
    if (this.isAscending) {
        ordernarLivrosPorPreco.call(this, true); // Ordena por crescente se isAscending for verdadeiro;
    } else {
        ordernarLivrosPorPreco.call(this, false); // Ordena por preço decrescente se isAscending for falso;
    }
})

function ordernarLivrosPorPreco(isAscending) {
    let livrosOrdenados = livros.sort((a, b) => isAscending ? a.preco - b.preco : b.preco - a.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}