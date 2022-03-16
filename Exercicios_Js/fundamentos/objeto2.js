console.log(typeof Object) //isso é uma função que verifica o tipo das variáveis e objetos

console.log(typeof new Object()) //Instancia uma função - Objeto criado a partir de uma função

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}//uma classe é interpretada como uma "sintaxe sugar" pois em sí é uma função, portanto é colocado como uma função
console.log(typeof Produto)
console.log(typeof new Produto()) //Objeto é um conjunto de chave e valor

//JavaScript executa códigos selecionados