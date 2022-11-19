// decremento -- e incremento ++ , existe pós e pré , no pré o ++valor será atualizado e exibido junto a instrução
// e no pós o valor++ será executado na instrução e exibido o valor atualizado após a instrução

var num1 = 10 
var num2 = 5
document.write('O número ' + num1 + ' + ' + num2 + ' = ' + (num1+num2)+'<br>')
document.write('O número ' + num1 + ' - ' + num2 + ' = ' + (num1-num2)+'<br>')
document.write('O número ' + num1 + ' * ' + num2 + ' = ' + (num1*num2)+'<br>')
document.write('O número ' + num1 + ' / ' + num2 + ' = ' + (num1/num2)+'<br>')
document.write('O número ' + num1 + ' % ' + num2 + ' = ' + (num1%num2)+'<br>')
document.write('O número ' + num1 + ' é pré-decrementado em  = ' + (++num1)+'<br><hr>')
document.write('O número ' + num1 + ' é pós-decrementado em  = ' + (num1++)+'<br>')
document.write('novo valor do decremento após a instrução ' + num1 )