/*
 * Complete a função 'urna' abaixo.
 *
 * O retorno da função é uma variável do tipo CHARACTER.
 * O parâmetro da função é a variável votos, do tipo CHARACTER_ARRAY.
 */

function urna(votos) {
    // Escreva seu código aqui
    var votosA = [];
    var votosB = [];
    var votosC = [];
    var resultado = "";

    for (var index = 0; index < votos.length; index++) {
        var voto = votos[index];
        if (voto == "A") {
            votosA.push(voto);
        } else if (voto == "B") {
            votosB.push(voto);
        } else
            votosC.push(voto);
    }

    if (votosA.length > votosB.length && votosA.length > votosC.length) {
        return votosA[0];
    } else if (votosB.length > votosA.length && votosB.length > votosC.length) {
        return votosB[0];
    } else if (votosC.length > votosA.length && votosC.length > votosB.length)
        return votosC[0];


}