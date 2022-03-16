console.log ('a = ', a)
var a = 2
console.log ('a = ', a)

/*
hoisting é o processo de interpretação de variáveis onde as veriáveis "var"
que são criadas posteriormente sofrem o hiçamento e são "jogadas" para cima 
pela interpretação para que seja compilado o código

**Porém o valor não acompanha

Interpretação do node:
var a
console.log ('a = ', a)
a = 2
console.log ('a = ', a)
*/

function teste(){
    console.log ('a = ', a)
    var a = 2
    console.log ('a = ', a)
}

teste() //vai sofrer o hiçamento mesmo no escopo de bloco
console.log ('a = ', a) //não vai achar pois a veriável foi criada dentro do escopo de função

console.log('b = ', b) //Não há hoisting para variáveis "let"
let b = 3
console.log('b = ', b)

//Assistir playlist no canal do youtube da COD3r - Dicas JavaScript
