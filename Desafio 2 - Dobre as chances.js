var resultado = [];

// Escreva seu código aqui

function doubleTheChances(chances) {
    for (var index = 0; index < chances.length; index++) {

        var result = chances[index] * 2;
        resultado.push(result);
    }

    return resultado;
}