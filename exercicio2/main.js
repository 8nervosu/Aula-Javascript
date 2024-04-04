//limite de velocidade

function ChecarVelocidade (velocidade) {
    const limiteVelocidade = 60;
    const pontoPorKm = 5;

    if (velocidade <= limiteVelocidade + pontoPorKm)
        console.log(velocidade);

    else {
        let pontos = Math.floor((velocidade - limiteVelocidade) / pontoPorKm - 0.1);
        if (pontos > 5)
            console.log('Licença suspensa')
        else
            console.log('Pontos perdidos: ', pontos)
    }
}

ChecarVelocidade (100);

//--------------------------------------------
//multiplos de 3 e 5


function multiplos(limite) {
    let multiplos = 0;

    for (let i = 0; i<= limite; i++) {
        if (i % 3 === 0 || i % 5 === 0)
        multiplos += i;
    }

    return multiplos;
}

console.log(multiplos(10))

//--------------------------------------------
//média de 3 notas 

const materias = [70, 75, 80];

function calcularNota(nota) {
    let total = 0;
    for (let materia of nota)
        total += materia;
    let media = total / 3;
    return media

}