function recebeNumero(){
    var numero = prompt("Digite um número: ");
    if (numero % 2 == 0){
        alert("Número digitado é PAR");
    }
    else{
        alert("Número digitado é IMPAR!");
    }
}

recebeNumero();
recebeNumero();
recebeNumero();

//---------------------------------------------->

function subtrair(num1, num2) {
    let resultado;
    if(num1 > num2){
        resultado = num1 - num2;
        console.log("O primeiro numero digitado é maior que o segundo e a subtração entre eles é " + resultado);
    }
    else{
        resultado = num2 - num1;
        console.log("O segundo numero digitado é maior que o primeiro e a subtração entre eles é " + resultado);
    }
}
let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");
subtrair(numero1, numero2);

//------------------------------------------------>

var resultado = (a, b, op) => {
    if (op == "+") {
        return a + b;
    }
    else if (op == "-") {
        return a - b;
    }
    else if (op == "*") {
        return a * b;
    }
    else if (op == "/") {
        return a / b;
    }
    else {
        return 0;
    }
}
console.log( resultado(10, 5, "/") );