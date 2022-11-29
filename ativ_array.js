/*
1) Crie uma aplicação web contendo um campo para entrada de texto (input text) e dois
botões (buttons), sendo um botão com a descrição "Adicionar" e outro com a descrição
"Ordenar"
Após criar os elementos de interação com o usuário acima, crie um Array de nome objetos contendo
os seguintes valores:
var objetos = Array('Cadeira', 'Impressora', 'Garfo')
Os próximos passos são:
A) Ao clicar no botão "Adicionar" disparar função que irá:
• Recuperar o valor contido no campo de texto.
• Verificar se o valor está vazio ou preenchido.
o Se vazio, exibir alert com a mensagem "Informe um valor válido".
o Se preenchido:
▪ Verificar se o valor informado já existe dentro do Array objetos.
▪ Se existir, exibir alert com a mensagem "Objeto já foi adicionado".
▪ Se não existir:
• Incluir o valor preenchido no campo dentro do Array.
• Efetuar um console.log do Array para debug (checar se está
funcionado).
• Limpar o valor contido no campo de entrada de texto.
B) Ao clicar no botão "Ordenar" disparar função que irá:
• Ordenar de forma alfabética os valores do Array de objetos.
• Efetuar um console.log do Array para debug
*/



var objetos = Array('cadeira', 'impressora', 'garfo')

function array_methods(){
    valor_campo = document.getElementById('palavra').value.toLowerCase() // recuperando id do objeto
    a= valor_campo
    if (valor_campo =! ''){

        if (objetos.indexOf(a) !== -1 ){
        alert('Objeto Ja Foi Adicionado')
        }
        else{
            objetos.push(a)
            alert('Objeto Adicionado ')
            console.log(objetos)
        }}
        else{
        alert('Invalido')
    }}

    function ordenarObjetos() {
        objetos.sort()
        console.log(objetos)
        }
       
