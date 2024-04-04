function calcularPrecoTotal(paprecoUnitario, quantidade) {
    const TAXA_DE_DESCONTO = 0.1
    let subtotal = paprecoUnitario * quantidade
    let desconto = 0
    
    if (subtotal > 100) {
        desconto = subtotal * TAXA_DE_DESCONTO
    }
    
    let precoFinal = subtotal - desconto
    return precoFinal
}

var paprecoUnitario = 25
var quantidade = 6 
var precoFinal = calcularPrecoTotal(paprecoUnitario, quantidade)
console.log("O preço final da minha compra é de: ", precoFinal)


