function numerosMenores(numero){
    if (numero < 1 || numero > 10) {
        console.log("O numero deve estar entre 1 e 10")
        return
    }

    for (let i = 1; i < numero; i++)
    console.log(i)

}

numerosMenores(4);
console.log("#####");
numerosMenores(7);


function calcularFatorial(numero){
    if (numero < 0) {
        console.log("Não aceita número negativo")
        return
    }

    let fatorial = 1
    let i = 1

    while(i <= numero) {
        fatorial *= i;
        i++
    }
    console.log("O fatorial de " + numero + "é: " + fatorial)
}

calcularFatorial(4)
console.log("-------")
calcularFatorial(7)


function calcularDezena(numero) {
    //verificar se o numero esta entre 1 e 100
    console.log(numero)
    console.log(Math.floor(numero / 10))
    console.log(Math.floor(numero/10) * 10)
    let dezena = Math.floor(numero / 10) * 10

        switch(dezena) {
            case 10:
                console.log("pertence a familia dos 10")
                break
            case 20:
                console.log("pertence a familia dos 20")
                break
            case 30:
                console.log("pertence a familia dos 30")
                break
            case 40:
                console.log("pertence a familia dos 40")
                break
        }
}

calcularDezena(30)