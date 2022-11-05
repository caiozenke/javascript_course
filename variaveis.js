// string -Declaramos Variaveis com var
var string = prompt('Digite o Alert do Java: ');

//  NUMBER INT/FLOAT
var numeroInt = -7
var numeroFlo = 7.5

// Boolean True/False
var boolvar = true


alert(string) //ABRIR UM DIalog (bom para debug)
document.write(string) // document representa um DOM, TODOS OS ELEMENTOS ESTÃO NO DOCUMENT
console.log(numeroInt)// muito usado em Debug, expoem no console ctrl+shift+i

// COCATENAÇÃO

document.write('<h4> Teste de ' + string + ' no Document<h4>')



// DIFERENÇAS ENTRE NULL e undefined

// null intencional e undefined nao

var teste = null;

console.log(teste)
//undefined
var t2 
console.log(t2)