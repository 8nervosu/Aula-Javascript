//const fruta = {
   // nome: "Uva",
   // cor: "Verde",
   // peso: 200,
   // tipo: "Fruta"
//}


//fruta["nome"] = "Banana"
//fruta.peso = 250
//console.log(fruta);



function fruta(nome, cor, peso, tipo) {
    this.nome = nome
    this.cor = cor
    this.peso = peso
    this.tipo = tipo
}

const fruta1 = new fruta("Uva", "Verde", 100, "Fruta")
const fruta2 = new fruta("Banana", "Amarelo", 350, "Fruta")

console.log(fruta1.nome.length);
console.log(fruta2.cor.toUpperCase())


for (const propriedade in fruta1) {
    console.log(propriedade + " = " + fruta1[propriedade])
}



class Produto {
    constructor(nome, preco) {
        this.nome = nome.toUpperCase()
        this.preco = preco
        this.vendido = false
    }

    somarICMS() {
        this.preco = this.preco * 1.21
    }

    vender() {
        this.vendido = true
    }
}

const produto1 = new Produto("Arroz", 8)
const produto2 = new Produto("Chocolate", 5.35)

produto1.somarICMS()
produto2.somarICMS()
produto1.vender()

console.log(produto1)
console.log(produto2)
