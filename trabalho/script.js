// Definindo um array para armazenar os livros disponíveis na livraria
let livrosDisponiveis = [];

// Função para adicionar um novo livro ao array de livros disponíveis
function adicionarLivro() {
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let preco = parseFloat(document.getElementById("preco").value);

    // Verificar se o preço é um número válido
    if (isNaN(preco) || preco <= 0) {
        alert("Preço inválido. Insira um número positivo.");
        return;
    }

    // Criando um objeto livro
    let livro = {
        titulo: titulo,
        autor: autor,
        preco: preco
    };

    // Adicionando o livro ao array de livros disponíveis
    livrosDisponiveis.push(livro);
    alert("Livro adicionado com sucesso!");
}

// Função para exibir os livros disponíveis
function exibirLivrosDisponiveis() {
    let livrosHTML = "";
    for (let livro of livrosDisponiveis) {
        livrosHTML += `Título: ${livro.titulo}, Autor: ${livro.autor}, Preço: ${livro.preco}\n`;
    }
    alert("Livros disponíveis na livraria:\n" + livrosHTML);
}

// Função para calcular o preço total dos livros
function calcularPrecoTotal() {
    let total = 0;
    for (let livro of livrosDisponiveis) {
        total += livro.preco;
    }
    return total;
}

// Função para calcular a média de preços dos livros
function calcularMediaPreco() {
    let total = calcularPrecoTotal();
    let media = total / livrosDisponiveis.length;
    return media;
}

// Função para aplicar desconto em todos os livros
function aplicarDesconto() {
    let percentualDesconto = parseFloat(document.getElementById("percentualDesconto").value);
    if (isNaN(percentualDesconto) || percentualDesconto < 0) {
        alert("Percentual de desconto inválido. Insira um número positivo.");
        return;
    }

    for (let livro of livrosDisponiveis) {
        let desconto = livro.preco * (percentualDesconto / 100);
        livro.preco -= desconto;
    }
    alert("Desconto aplicado com sucesso!");
}

// Função para exibir o preço total com desconto aplicado
function exibirPrecoTotalComDesconto() {
    let precoTotalComDesconto = calcularPrecoTotal();
    alert(`Preço total com desconto aplicado: ${precoTotalComDesconto}`);
}

// Função para pesquisar livros por autor
function pesquisarPorAutor() {
    let autorPesquisa = document.getElementById("autorPesquisa").value;
    let livrosEncontrados = livrosDisponiveis.filter(livro => livro.autor.toLowerCase() === autorPesquisa.toLowerCase());
    let livrosHTML = "";
    if (livrosEncontrados.length === 0) {
        alert("Nenhum livro encontrado para o autor especificado.");
    } else {
        for (let livro of livrosEncontrados) {
            livrosHTML += `Título: ${livro.titulo}, Autor: ${livro.autor}, Preço: ${livro.preco}\n`;
        }
        alert(`Livros encontrados para o autor "${autorPesquisa}":\n${livrosHTML}`);
    }
}

// Função para ordenar os livros por preço (do mais barato para o mais caro)
function ordenarPorPreco() {
    livrosDisponiveis.sort((a, b) => a.preco - b.preco);
    alert("Livros ordenados por preço.");
}
