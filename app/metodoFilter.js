const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => {
    btn.isFiltered = false; // adicionando uma propriedade isFiltered a cada botão
    btn.addEventListener('click', function() {
        this.isFiltered = !this.isFiltered; // Alterna o estado do botão
        if(this.isFiltered) {
            filtrarLivros.call(this); //filtra os livros se isFiltered for true
        } else {
            exibirOsLivrosNaTela(livros); // Exibe todos os livros se for falso
        }
    })
})



function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
}

function filtrarLivrosDisponiveis() {
    let livrosDisponiveis = livros.filter(livro => livro.quantidade > 0)
    exibirOsLivrosNaTela(livrosDisponiveis)

    let totalPreco = definirTotalLivrosDisponiveis(livrosDisponiveis)

    let elementoLivrosDisponiveis = document.querySelector('.livros__disponiveis')
    elementoLivrosDisponiveis.innerHTML = `
        <p>Todos os livros disponíveis por R$ <span id="valor">${totalPreco.toFixed(2)}</span></p>
    `
    elementoLivrosDisponiveis.style.display = 'flex'
}


let btnLivrosDisponiveis = document.getElementById('btnLivrosDisponiveis')
btnLivrosDisponiveis.addEventListener('click', filtrarLivrosDisponiveis)

