// Aulas sobre function


// Calculando area de um terreno quadrado


function CalcularArea(x,y){
    var x = parseFloat(x)
    var y = parseFloat(y)

    var calculo = x * y 

    return calculo
}

var teste = CalcularArea(10,5)

document.write('o terreno tem ' + teste +' metros quadrados')



// undefined


function somar(x,y){
    x = x === undefined ? 0: x
    var x = parseFloat(x)
    var y = parseFloat(y)


    var sum = x+y

    return sum
}


console.log(somar(2))