/*
1) Crie um campo <input type="text"> e aplique os seguintes controles com base nos
eventos abaixo:
• No evento de foco modifique o background do input para amarelo.
• Quando o campo perder o foco, recupere o seu respectivo valor e:
o Caso o conteúdo contido no campo tenha menos de 3 caracteres o mesmo
deve ter seu background alterado para vermelho.
o Caso o conteúdo contido no campo tenha 3 caracteres ou mais o background
deve ser alterado para verde.
*/

function evento(){
    document.getElementById('botao').style.background = 'yellow'
    document.getElementById('botao').style.height = '100px'
    document.getElementById('botao').style.width = '200px'

    console.log('aa')
}


function validacampo(){
   var valor = document.getElementById('botao').value

   if(valor.length < 3) {
    document.getElementById('botao').style.background = "red"
    } else {
    document.getElementById('botao').style.background = "green"
    }
}