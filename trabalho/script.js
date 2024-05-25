let livrosDisponiveis = [];

// Função para exibir notificações
function exibirNotificacao(mensagem) {
  const notificationElement = document.getElementById("notification");
  notificationElement.textContent = mensagem;
  notificationElement.classList.add("show");

  setTimeout(() => {
    notificationElement.classList.remove("show");
  }, 3000);
}

// Função para adicionar um novo livro ao array de livros disponíveis
function adicionarLivro() {
  let titulo = document.getElementById("titulo").value;
  let autor = document.getElementById("autor").value;
  let preco = parseFloat(document.getElementById("preco").value);

  // Verificar se o preço é um número válido
  if (isNaN(preco) || preco <= 0) {
    exibirNotificacao("Preço inválido. Insira um número positivo.");
    return;
  }

  // Criando um objeto livro
  let livro = {
    titulo: titulo,
    autor: autor,
    preco: preco,
  };

  // Adicionando o livro ao array de livros disponíveis
  livrosDisponiveis.push(livro);
  exibirNotificacao("Livro adicionado com sucesso!");
  atualizarListaLivros();
  atualizarResumo();
  limparFormulario();
}

// Função para limpar o formulário
function limparFormulario() {
  document.getElementById("titulo").value = "";
  document.getElementById("autor").value = "";
  document.getElementById("preco").value = "";
}

// Função para exibir os livros disponíveis
function atualizarListaLivros() {
  let livrosListElement = document.getElementById("livros");
  livrosListElement.innerHTML = "";
  for (let [index, livro] of livrosDisponiveis.entries()) {
    let livroElement = document.createElement("li");
    livroElement.innerHTML = `
            Título: ${livro.titulo}, Autor: ${
      livro.autor
    }, Preço: R$ ${livro.preco.toFixed(2)}
            <button onclick="removerLivro(${index})">Remover</button>
        `;
    livrosListElement.appendChild(livroElement);
  }
}

// Função para remover um livro da lista
function removerLivro(index) {
  livrosDisponiveis.splice(index, 1);
  exibirNotificacao("Livro removido com sucesso!");
  atualizarListaLivros();
  atualizarResumo();
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
  let media = livrosDisponiveis.length ? total / livrosDisponiveis.length : 0;
  return media;
}

// Função para atualizar o resumo de preços
function atualizarResumo() {
  let precoTotalElement = document.getElementById("preco-total");
  let mediaPrecoElement = document.getElementById("media-preco");

  let precoTotal = calcularPrecoTotal();
  let mediaPreco = calcularMediaPreco();

  precoTotalElement.textContent = `Preço Total: R$ ${precoTotal.toFixed(2)}`;
  mediaPrecoElement.textContent = `Média de Preço: R$ ${mediaPreco.toFixed(2)}`;
}

// Função para aplicar desconto em todos os livros
function aplicarDesconto() {
  let percentualDesconto = parseFloat(
    document.getElementById("percentualDesconto").value
  );
  if (isNaN(percentualDesconto) || percentualDesconto < 0) {
    exibirNotificacao(
      "Percentual de desconto inválido. Insira um número positivo."
    );
    return;
  }

  for (let livro of livrosDisponiveis) {
    let desconto = livro.preco * (percentualDesconto / 100);
    livro.preco -= desconto;
  }
  exibirNotificacao("Desconto aplicado com sucesso!");
  atualizarListaLivros();
  atualizarResumo();
}

// Função para pesquisar livros por autor
function pesquisarPorAutor() {
  let autorPesquisa = document
    .getElementById("autorPesquisa")
    .value.toLowerCase();
  let livrosListElement = document.getElementById("livros");
  livrosListElement.innerHTML = "";

  let livrosFiltrados = livrosDisponiveis.filter((livro) =>
    livro.autor.toLowerCase().includes(autorPesquisa)
  );

  if (livrosFiltrados.length === 0) {
    livrosListElement.innerHTML = "<li>Nenhum livro encontrado.</li>";
  } else {
    for (let [index, livro] of livrosFiltrados.entries()) {
      let livroElement = document.createElement("li");
      livroElement.innerHTML = `
                Título: ${livro.titulo}, Autor: ${
        livro.autor
      }, Preço: R$ ${livro.preco.toFixed(2)}
                <button onclick="removerLivro(${index})">Remover</button>
            `;
      livrosListElement.appendChild(livroElement);
    }
  }
}

// Função para ordenar os livros por preço
function ordenarPorPreco() {
  livrosDisponiveis.sort((a, b) => a.preco - b.preco);
  exibirNotificacao("Livros ordenados por preço.");
  atualizarListaLivros();
}

function toggleFakeData() {
  const fakeDataSwitch = document.getElementById("fakeDataSwitch");
  if (fakeDataSwitch.checked) {
    generateFakeData();
  } else {
    clearFakeData();
  }
}

function generateFakeData() {
  const fakeBooks = [
    {
      titulo: "Aventuras de Sherlock Holmes",
      autor: "Arthur Conan Doyle",
      preco: 25.99,
    },
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", preco: 20.5 },
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", preco: 35.75 },
    {
      titulo: "Cem Anos de Solidão",
      autor: "Gabriel García Márquez",
      preco: 18.9,
    },
    { titulo: "1984", autor: "George Orwell", preco: 22.25 },
  ];

  for (const book of fakeBooks) {
    book.fake = true;
    livrosDisponiveis.push(book);
  }

  atualizarListaLivros();
  atualizarResumo();
  exibirNotificacao("Dados falsos adicionados com sucesso!");
}

function clearFakeData() {
  livrosDisponiveis = livrosDisponiveis.filter((book) => !book.fake);
  atualizarListaLivros();
  atualizarResumo();
  exibirNotificacao("Dados falsos removidos com sucesso!");
}
