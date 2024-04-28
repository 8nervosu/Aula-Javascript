// Definindo um array para armazenar os livros disponíveis na livraria
let livrosDisponiveis = [];

// Função para adicionar um novo livro ao array de livros disponíveis
function adicionarLivro() {
    let titulo = prompt("Digite o título do livro:");
    let autor = prompt("Digite o autor do livro:");
    let preco = parseFloat(prompt("Digite o preço do livro:"));

    // Verificar se o preço é um número válido
    if (isNaN(preco) || preco <= 0) {
        console.log("Preço inválido. Insira um número positivo.");
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
}

// Função para calcular o preço total dos livros no array
function calcularPrecoTotal() {
    let total = 0;
    for (let livro of livrosDisponiveis) {
        total += livro.preco;
    }
    return total;
}

// Função para calcular a média de preços dos livros no array
function calcularMediaPreco() {
    let total = calcularPrecoTotal();
    let media = total / livrosDisponiveis.length;
    return media;
}

// Função para aplicar desconto em todos os livros
function aplicarDesconto(percentualDesconto) {
    for (let livro of livrosDisponiveis) {
        let desconto = livro.preco * (percentualDesconto / 100);
        livro.preco -= desconto;
    }
}

// Função para pesquisar livros por autor
function pesquisarPorAutor(autor) {
    let livrosEncontrados = livrosDisponiveis.filter(livro => livro.autor.toLowerCase() === autor.toLowerCase());
    return livrosEncontrados;
}

// Função para ordenar os livros por preço (do mais barato para o mais caro)
function ordenarPorPreco() {
    livrosDisponiveis.sort((a, b) => a.preco - b.preco);
}

// Fluxo while
while (true) {
    let opcao = prompt("Escolha uma opção:\n1. Adicionar livro\n2. Exibir livros disponíveis\n3. Calcular preço total\n4. Calcular média de preço\n5. Aplicar desconto\n6. Pesquisar livros por autor\n7. Ordenar livros por preço\n8. Sair");

    switch (opcao) {
        case "1":
            adicionarLivro();
            break;
        case "2":
            exibirLivrosDisponiveis();
            break;
        case "3":
            console.log(`Preço total dos livros: ${calcularPrecoTotal()}`);
            break;
        case "4":
            console.log(`Média de preço dos livros: ${calcularMediaPreco()}`);
            break;
        case "5":
            let percentualDesconto = parseFloat(prompt("Digite o percentual de desconto a ser aplicado:"));
            if (isNaN(percentualDesconto) || percentualDesconto < 0) {
                console.log("Percentual de desconto inválido. Insira um número positivo.");
            } else {
                aplicarDesconto(percentualDesconto);
                console.log("Desconto aplicado com sucesso.");
            }
            break;
        case "6":
            let autorPesquisa = prompt("Digite o nome do autor para pesquisa:");
            let livrosEncontrados = pesquisarPorAutor(autorPesquisa);
            if (livrosEncontrados.length === 0) {
                console.log("Nenhum livro encontrado para o autor especificado.");
            } else {
                console.log(`Livros encontrados para o autor "${autorPesquisa}":`);
                for (let livro of livrosEncontrados) {
                    console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Preço: ${livro.preco}`);
                }
            }
            break;
        case "7":
            ordenarPorPreco();
            console.log("Livros ordenados por preço:");
            exibirLivrosDisponiveis();
            break;
        case "8":
            console.log("Saindo...");
            // Encerrar o loop e finalizar o programa
            break; // Utilize break em vez de return
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}