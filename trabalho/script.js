let livrosDisponiveis = [];
let ordenacaoCrescente = true; // Variável para controlar a direção da ordenação

// Função para exibir notificações
function exibirNotificacao(mensagem, tipo) {
  const notificationElement = document.getElementById("notification");
  notificationElement.textContent = mensagem;
  notificationElement.classList.add("show", tipo);

  setTimeout(() => {
    notificationElement.classList.remove("show", tipo);
  }, 3000);
}

// Função para adicionar um novo livro ao array de livros disponíveis
function adicionarLivro() {
  if (validarFormulario()) {
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let preco = parseFloat(document.getElementById("preco").value);

    // Criando um objeto livro
    let livro = {
      titulo: titulo,
      autor: autor,
      preco: preco,
    };

    // Adicionando o livro ao array de livros disponíveis
    livrosDisponiveis.push(livro);
    exibirNotificacao("Livro adicionado com sucesso!", "success");
    atualizarListaLivros();
    atualizarResumo();
    limparFormulario();

    // Adiciona classes de sucesso ao botão de "Adicionar Livro"
    document.getElementById("adicionarLivroBtn").classList.add("success");
  } else {
    // Adiciona classes de erro ao botão de "Adicionar Livro"
    document.getElementById("adicionarLivroBtn").classList.add("error");
  }
}

//Função validação input
function validarFormulario() {
  let titulo = document.getElementById("titulo").value;
  let autor = document.getElementById("autor").value;
  let preco = parseFloat(document.getElementById("preco").value);

  if (titulo.trim() === "") {
    exibirNotificacao("Por favor, insira o título do livro.", "error");
    return false;
  }

  if (autor.trim() === "") {
    exibirNotificacao("Por favor, insira o nome do autor.", "error");
    return false;
  }

  if (isNaN(preco) || preco <= 0) {
    exibirNotificacao(
      "Por favor, insira um preço válido para o livro.",
      "error"
    );
    return false;
  }

  return true;
}

// Função para limpar o formulário
function limparFormulario() {
  document.getElementById("titulo").value = "";
  document.getElementById("autor").value = "";
  document.getElementById("preco").value = "";

  document
    .getElementById("adicionarLivroBtn")
    .classList.remove("success", "error");
}

// Função para exibir os livros disponíveis
function atualizarListaLivros() {
  let livrosListElement = document.getElementById("livros");
  livrosListElement.innerHTML = "";

  if (livrosDisponiveis.length === 0) {
    let emptyMessageElement = document.createElement("li");
    emptyMessageElement.textContent = "Nenhum livro disponível.";
    livrosListElement.appendChild(emptyMessageElement);
    return;
  }

  for (let [index, livro] of livrosDisponiveis.entries()) {
    let livroElement = document.createElement("li");
    livroElement.id = `livro-${index}`;
    livroElement.innerHTML = `
          Título: ${livro.titulo}<br>
          Autor: ${livro.autor}<br>
          Preço: R$ ${livro.preco.toFixed(2)}<br>
          <div class="livro-buttons">
          <button class="editar" onclick="editarLivro(${index})">Editar</button>
          <button class="remover" onclick="removerLivro(${index})">Remover</button>
          </div>`;
    livrosListElement.appendChild(livroElement);
  }
}

// Função para exibir o modal de confirmação
function exibirModalConfirmacao(mensagem, onConfirm) {
  const modal = document.getElementById("confirmationModal");
  const modalMessage = document.getElementById("modal-message");
  const confirmButton = document.getElementById("confirmButton");
  const cancelButton = document.getElementById("cancelButton");

  modalMessage.textContent = mensagem;
  modal.style.display = "block";

  confirmButton.onclick = () => {
    onConfirm();
    modal.style.display = "none";
  };

  cancelButton.onclick = () => {
    modal.style.display = "none";
  };
}

// Função para remover um livro da lista
function removerLivro(index) {
  let livroRemover = livrosDisponiveis[index].titulo;
  exibirModalConfirmacao(
    `Tem certeza de que deseja remover o livro "${livroRemover}"?`,
    () => {
      livrosDisponiveis.splice(index, 1);
      exibirNotificacao(
        `Livro "${livroRemover}" removido com sucesso!`,
        "success"
      );
      atualizarListaLivros();
      atualizarResumo();
    }
  );
}

let livroAtualIndex = null;

function editarLivro(index) {
  livroAtualIndex = index;
  const livro = livrosDisponiveis[index];

  document.getElementById("titulo-edicao").value = livro.titulo;
  document.getElementById("autor-edicao").value = livro.autor;
  document.getElementById("preco-edicao").value = livro.preco;

  document.getElementById("editModal").style.display = "block";
}

function salvarEdicao() {
  const titulo = document.getElementById("titulo-edicao").value;
  const autor = document.getElementById("autor-edicao").value;
  const preco = parseFloat(document.getElementById("preco-edicao").value);

  if (
    titulo.trim() === "" ||
    autor.trim() === "" ||
    isNaN(preco) ||
    preco <= 0
  ) {
    exibirNotificacao(
      "Por favor, preencha todos os campos corretamente.",
      "error"
    );
    return;
  }

  livrosDisponiveis[livroAtualIndex] = { titulo, autor, preco };
  exibirNotificacao("Livro editado com sucesso!", "success");

  atualizarListaLivros();
  atualizarResumo();
  fecharModal();
}

function cancelarEdicao() {
  fecharModal();
}

function fecharModal() {
  livroAtualIndex = null;
  document.getElementById("editModal").style.display = "none";
}

// Função para exibir notificações com feedback visual
function exibirNotificacao(mensagem, tipo) {
  const notificationElement = document.getElementById("notification");
  notificationElement.textContent = mensagem;
  notificationElement.classList.add("show", tipo);

  setTimeout(() => {
    notificationElement.classList.remove("show", tipo);
  }, 3000);
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
  let totalLivrosElement = document.getElementById("total-livros");

  let precoTotal = calcularPrecoTotal();
  let mediaPreco = calcularMediaPreco();
  let totalLivros = livrosDisponiveis.length;

  precoTotalElement.textContent = `Preço Total: R$ ${precoTotal.toFixed(2)}`;
  mediaPrecoElement.textContent = `Média de Preço: R$ ${mediaPreco.toFixed(2)}`;
  totalLivrosElement.textContent = `Total de Livros: ${totalLivros}`;
}

// Função para aplicar desconto em todos os livros
function aplicarDesconto() {
  let percentualDesconto = parseFloat(
    document.getElementById("percentualDesconto").value
  );
  if (isNaN(percentualDesconto) || percentualDesconto < 0) {
    exibirNotificacao(
      "Percentual de desconto inválido. Insira um número positivo.",
      "error"
    );
    return;
  }

  for (let livro of livrosDisponiveis) {
    let desconto = livro.preco * (percentualDesconto / 100);
    livro.preco -= desconto;
  }
  exibirNotificacao("Desconto aplicado com sucesso!", "success");
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
              Título: ${livro.titulo}<br>
              Autor: ${livro.autor}<br>
              Preço: R$ ${livro.preco.toFixed(2)}<br>
              <button class="editar" onclick="editar(${index})">Editar</button>
              <button class="remover" onclick="removerLivro(${index})">Remover</button>
          `;
      livrosListElement.appendChild(livroElement);
    }
  }
}

// Função para limpar a pesquisa
function limparPesquisa() {
  document.getElementById("autorPesquisa").value = "";
  atualizarListaLivros();
}

// Função para ordenar os livros por preço
function ordenarPorPreco() {
  if (ordenacaoCrescente) {
    livrosDisponiveis.sort((a, b) => a.preco - b.preco);
  } else {
    livrosDisponiveis.sort((a, b) => b.preco - a.preco);
  }
  ordenacaoCrescente = !ordenacaoCrescente;
  exibirNotificacao("Livros ordenados por preço.", "info");
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
  exibirNotificacao("Dados falsos adicionados com sucesso!", "info");
}

function clearFakeData() {
  livrosDisponiveis = livrosDisponiveis.filter((book) => !book.fake);
  atualizarListaLivros();
  atualizarResumo();
  exibirNotificacao("Dados falsos removidos com sucesso!", "info");
}

// Função para exportar a lista de livros em PDF
function exportarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  let y = 10;

  // Adicionando o cabeçalho
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("Relatório da Livraria", 105, y, null, null, "center");
  y += 10;

  doc.setLineWidth(0.5);
  doc.line(10, y, 200, y);
  y += 10;

  // Adicionando a data e hora
  const today = new Date();
  const dateStr = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;
  const timeStr = `${today.getHours()}:${today
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${today.getSeconds().toString().padStart(2, "0")}`;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Data de Geração: ${dateStr} às ${timeStr}`, 10, y);
  y += 10;

  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Lista de Livros", 10, y);
  y += 10;

  if (livrosDisponiveis.length === 0) {
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Nenhum livro disponível.", 10, y);
  } else {
    doc.setFontSize(12);
    livrosDisponiveis.forEach((livro, index) => {
      doc.text(
        `${index + 1}. Título: ${livro.titulo}, Autor: ${
          livro.autor
        }, Preço: R$ ${livro.preco.toFixed(2)}`,
        10,
        y
      );
      y += 10;
    });
  }

  y += 10;
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Resumo", 10, y);
  y += 10;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(document.getElementById("preco-total").textContent, 10, y);
  y += 10;
  doc.text(document.getElementById("media-preco").textContent, 10, y);
  y += 10;
  doc.text(document.getElementById("total-livros").textContent, 10, y);

  doc.save("Livraria_resumo.pdf");
}
