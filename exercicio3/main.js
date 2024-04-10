// Função usando for
function calcularParcelasFor(valorInicial, taxaJuros, numParcelas) {
    let parcelas = [];
    let valorParcela = valorInicial / numParcelas;
    for (let i = numParcelas; i > 0; i--) {
        parcelas.push(valorParcela + (valorInicial * taxaJuros));
        valorInicial -= valorParcela;
    }
    return parcelas;
}

// Função usando while
function calcularParcelasWhile(valorInicial, taxaJuros, numParcelas) {
    let parcelas = [];
    let valorParcela = valorInicial / numParcelas;
    while (numParcelas > 0) {
        parcelas.push(valorParcela + (valorInicial * taxaJuros));
        valorInicial -= valorParcela;
        numParcelas--;
    }
    return parcelas;
}

// Exemplo de uso
const valorInicial = 1000; // R$1000,00
const taxaJuros = 0.05; // 5% de taxa de juros
const numParcelas = 12; // 12 parcelas

const parcelasFor = calcularParcelasFor(valorInicial, taxaJuros, numParcelas);
const parcelasWhile = calcularParcelasWhile(valorInicial, taxaJuros, numParcelas);

console.log("Parcelas usando for (decrescente):", parcelasFor);
console.log("Parcelas usando while (decrescente):", parcelasWhile);