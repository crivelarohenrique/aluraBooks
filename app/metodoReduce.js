function definirTotalLivrosDisponiveis(livrosDisponiveis){
    return livrosDisponiveis.reduce((total, livro) => total + livro.preco, 0)
}