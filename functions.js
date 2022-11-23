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

// funções anonimas

var exibirFunc = function(nome){
    document.write('<br> Função anonima ' + nome )
}

exibirFunc('funcao sem nome')





// functions callback - Passamos como parametros

function exibirArtigo(id,callbackSucess,callbackErro){
    //essa funcao tem como funcionalidade recuperar um artigo por meio de seu id

    if (true){
        callbackSucess('Funções em Callback' , 'Descrição funções callback meio que um try function in function')
    } 
    else {
        callbackErro('Erro ao recuperar')
    }
}

//são funções anonimas
var callbackSucess = function(titulo, descricao){
    document.write('<h2>' + titulo +' </h2> <hr>')
    document.write('<p>' + descricao + '<p>')
}

var callbackErro = function(erro){
    document.write('<br> Mensagem de erro :' + erro +'<hr>')
}

// chamando função
exibirArtigo(1,callbackSucess,callbackErro)



// datas

var data = new Date()

document.write('<br><h2>DATAS </h2><hr>'+data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear()) // (data.getMonth() + 1)  get_month 0-11

//adicionar/remover dias - methods sets
data.setDate(data.getDay() - 23 )
document.write('<br> Atualizada Dias-  '+data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear()) // (data.getMonth() + 1)  get_month 0-11

data.setMonth(data.getMonth() + 10)
document.write('<br> Atualizada Meses-  '+data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear()+'<br>') // (data.getMonth() + 1)  get_month 0-11



// calculando diferença de dias em datas por milissegundos


//15/1/2017
var data1 = new Date(2017 , 0 ,15)

// 25/02/2017
var data2 = new Date(2017 , 1 ,25)


// ms =  milissegundos , math.abs = transforma em numero absoluto,ou seja, positivo

var ms_dif = Math.abs(data1.getTime() - data2.getTime())



//quantos ms tem em 1 dia
var ms_dia = 1*24*60*60*1000


// calculo 

var dif_dia = Math.round(ms_dif /ms_dia)

document.write('<br> A diferença de dias é de: ' + dif_dia)


