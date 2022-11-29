var lista = Array();

lista[1] = 'caio'
lista[0] = '0'

//console.log(lista)


// ou pode ser definida assim

var lista_dif = []

lista_dif[0] = 'indice 0'

//console.log(lista_dif)


// var lista_frutas = Array()
/*
    var lista_frutas = []
    lista_frutas[1] = 'Banana'
    lista_frutas[2] = true
    lista_frutas['x'] = 'Morango'
    lista_frutas[4] = 100 
 */
 // var lista_frutas = Array('Banana', 'Maçã', 'Morango', 'Uva')
    var lista_fruta = ['Banana', 'Maçã', 'Morango', 'Uva'] // atribuição automatica 0 cmc

    
    //console.log(lista_frutas)
   
   
    // Array multidimencional
    var lista_de_coisas = []

    
               // lista dentro de uma lista
   lista_de_coisas['pessoa'] = []


            //definir um objeto dentro da lista pessoa
   lista_de_coisas['pessoa'][1] = 'Caio'

               //outro array dentro de um array
   lista_de_coisas['carros'] = ['bmw','porshe','jesus']


   console.log(lista_de_coisas)
   console.log(lista_de_coisas['pessoa'][1])
   console.log(lista_de_coisas['carros'][0])


// incluir e excluir elementos

lista_de_coisas['carros'].push('aston martin')// incluir no final do array
lista_de_coisas['carros'].unshift('ferrari')// incluir no começo do array

// Retorno  --->  carros: (5) ['ferrari', 'bmw', 'porshe', 'jesus', 'aston martin']

lista_de_coisas['carros'].pop() // exclui o ultimo valor do array
lista_de_coisas['carros'].shift()// exclui o primeiro

//Retorno --->  carros: (3) ['bmw', 'porshe', 'jesus']

// Pesquisa com INdexOf
var lista_frutas = Array()

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maça'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

console.log(lista_frutas.indexOf('Morango')) 
console.log(lista_frutas.indexOf('Abacaxi')) //retorna -1

var auxiliar = lista_frutas.indexOf('Banana')
if(auxiliar === -1) {
 console.log('Elemento não existe')
} else {
 console.log('Elemento existe e está na posição' + auxiliar)
}

//Lembre-se, a pesquisa é case sensitive!


