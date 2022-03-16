{ 
    { 
        { 
            { 
                { 
                    var sera = 'Sera????'
                    console.log(sera) 
                } 
            } 
        } 
    } 
}
console.log(sera)
//scopo é onde a variável fica visivel, onde ela pode ser acessada, em algumas linguagens se a variavel é criada dentro de um bloco você somente poderia ficar visivel dentro deste bloco
//Nas propriedades de var, esta variável ficará visivel mesmo que esteja dentro de um bloco, que não seja função

function teste(){
    var local = 123
    console.log(local)
}
teste()
//console.log(local) não é possível, pois quando você declara um função dentro de uma função o scopo dela é somente dentro da função
//O grande problema de criar uma variável com o scopo global é que, mesmo podendo acessar ela em todo o programa, uma sobrescrita feita em cima dela pode gerar um grande problema
//Com isso var é utilizada com essas funções e com essas restrições bem definidas pois essas diferenças podem criar um grande problema

//DICA MASTER: FUJA DO ESCOPO GLOBAL!!!!!!

//Aula2 ______________________________________________

var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

/*var - tem escopo global quando é declarada fora, se atribuída
um valor dentro novamente ele vai pegar o valor

tem dois escopos

scopo função- dentro de bloco de códigos --Dentro de função, qualquer outro bloco ela pega valores
global - geral em arquivo/página
*/