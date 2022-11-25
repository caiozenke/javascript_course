// getElementbyid - id
// ElementS para outras tags

/*selecionando atributos
console.log(document.getElementById('nome_usuario'))// 
//console.log(document.getElementsByClassName('campo_texto'))
//console.log(document.getElementsByName('nome'))
//console.log(document.getElementsByClassName('campo_texto'))
*/

function carac(){
    // value = pegando o valor
    var carac_digitada = document.getElementById('digitado').value

    //limpando a barra
    document.getElementById('digitado').value = ''

    //evitando espaços antea
    carac_digitada.trim()

    switch(carac_digitada){
        case '0':
            document.getElementById('numeros').value +=carac_digitada
            break;
        case '1':
            document.getElementById('numeros').value +=carac_digitada
            break;
        case '2':
            document.getElementById('numeros').value +=carac_digitada
            break;
        case '3':
            document.getElementById('numeros').value +=carac_digitada
            break;
        case '4':
            document.getElementById('numeros').value +=carac_digitada
            break;
        case '5':
            document.getElementById('numeros').value +=carac_digitada
            break;
        case '6':
            document.getElementById('numeros').value +=carac_digitada
            break;
        case '7':
            document.getElementById('numeros').value +=carac_digitada
            break;
        case '8':
            document.getElementById('numeros').value +=carac_digitada
            break;
        case '9':
            document.getElementById('numeros').value +=carac_digitada
            break;

        default:
            // adicionando o valor se for uma letra
            document.getElementById('letras').value += carac_digitada

        
    }
}




// manipulando estilos de elementos

function Modificacor(cor_de_fundo){
    document.getElementById('quadrado').style.backgroundColor = cor_de_fundo
}



// trocando estilos

function modificaclasse(){
    document.getElementById('textomodificado').className = 'estilo2'
}