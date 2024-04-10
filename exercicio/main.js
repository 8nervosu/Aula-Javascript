var digitoUm = parseFloat(prompt("Digite um número:"));
var digitodois = parseFloat(prompt("Digite o segundo número:"))

var divisao = digitoUm / digitodois; 

alert("O resultado final é:" + divisao)


var nome = prompt("Digite o seu nome:")
console.log("Olá" + " " + nome + " " + "um ótimo dia para você!")

var cor = prompt("Qual sua cor favorita:")
var numero = prompt("qual seu néumro favorito:")
console.log("Sua cor favorita é" + " " + cor + " e seu número favorito é:" + " " + numero + ".")

function ehMultiplo(numero1, numero2){
	if(numero1 % numero2 === 0){
		return `${numero1} é múltiplo de ${numero2}`
	} 
	else {
		return `${numero1} e ${numero2} não são múltiplos`
	}
}

let numero1 = parseFloat(prompt("Digite o primeiro número"))
let numero2 = parseFloat(prompt("Digite o segundo número"))

let resultado = ehMultiplo(numero1, numero2)
alert(resultado);