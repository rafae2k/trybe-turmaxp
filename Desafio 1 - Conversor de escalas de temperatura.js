var celsius = "celsius"
var kelvin = "kelvin"
var fahrenheit = "fahrenheit"

function converteTemperatura(temperatura, escalaOrigem, escalaDesejada) {

    if (escalaOrigem === celsius && escalaDesejada === kelvin) {
        temperatura = temperatura + 273.15;

        return temperatura;

    } else if (escalaOrigem === kelvin && escalaDesejada === celsius) {
        temperatura = temperatura - 273.15;

        return temperatura;

    } else if (escalaOrigem === celsius && escalaDesejada === fahrenheit) {
        temperatura = temperatura * 1.8 + 32;

        return temperatura;

    } else if (escalaOrigem === fahrenheit && escalaDesejada === celsius) {
        temperatura = temperatura / 1.8 - 32;

        return temperatura;

    } else if (escalaOrigem === fahrenheit && escalaDesejada === kelvin) {
        temperatura = (temperatura + 459.67) * 5 / 9;

        return temperatura;

    } else(escalaOrigem === kelvin && escalaDesejada === fahrenheit)

    temperatura = temperatura * 9 / 5 - 459.67;

    return temperatura;

}