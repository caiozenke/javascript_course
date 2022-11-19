






//pedidos de dados ao usuario

var nome = prompt('Digite Seu nome:')
var altura = prompt('Digite Sua Altura em Cm:')
var peso = prompt('Digite seu peso:')




// conversão dos valores
peso = parseFloat(peso)
altura = parseFloat(altura)
altura /= 100

// imc
var m = peso / altura**2
a = m

var classificação = ''
if (m < 16){
    classificação = 'situação muito grave';
}
else if(m = 16 && m < 16.99){
    classificação = 'Baixo Peso grave';
}
else if (m = 17 && m < 18.49){
    classificação = 'Peso Normal';
}
else if (m = 18.50 && m < 24.99){
    classificação = 'Peso Normal';
}
else if (m = 25 && m < 29.99){
    classificação = 'Sobrepeso';
}
else if (m = 30 && m < 34.99){
    classificação = 'Obesidade grau 1';
}
else if (m = 35 && m < 39.99){
    classificação = 'Obesidade grau 2';
}
else{
    classificação = 'Obesidade grau 3';
}

// classificação 
document.write( nome + ' possui índice de massa corporal igual a  '+ a + ' , sendo classificado como: ' + classificação)