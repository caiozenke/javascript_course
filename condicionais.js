// operador igual == (mesmo valor)
// operador identico === (msmo valor e mesmo tipo)
// operador diferente =!
// operador nao indentico (valor diferente e tipo tbm)


var num1 = 2
var str1 = '1'
if (num1 == str1){
    document.write('oprado igual')
} 
else if (num1 === 2) {
    document.write('operador identico ')
} 
else{
    document.write('caiu no else')
}



// teste boletim 

var n1 = 7
var n2 = 4
var n3 = 5

var media_aluno = (n1 + n2 + n3) / 3

/*
if (media_aluno > 10){
    alert('Erro Media Invalida');
}
else if (media_aluno >= 6){
    document.write('Aluno Aprovado');
}
else{
    document.write('Aluno Reprovado')
}
*/
// ou podemos usar assim


var resultado = media_aluno >= 6 ? 'aprovado' : 'reprovado'

document.write(resultado)