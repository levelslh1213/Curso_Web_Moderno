const peso1 = 1.0
const peso2 = Number('2.0') //criação de constantes e variáveis do tipo Number

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //O metodo do "IsInteger" dentro da função "Number" verifica a tipagem do número em relção a um inteiro
console.log(Number.isInteger(peso2))

const avaliação1 = 9.871, avaliação2 = 6.871

const total = avaliação1 * peso1 + avaliação2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //A Função ToFixed limita a quantidade de casas a ser exibidas - esta função é "exclusiva" para a tipagem Number, ou seja, não pode ser aplicada em outros tipos de constantes e variáveis
console.log(media.toString())
console.log(media.toString(2))//O valor 2 atribuido a função "ToString" faz com que o valor retornado seja convertido em String binário
console.log(typeof media)
//Em JavaScript e na maioria das linguagens as funções que cercam uma tipagem são "chamadas" através do operador "."
console.log(typeof Number) //"Number" (com o "N" maiúsculo) é um função
console.log(typeof number) 
//tipo indefinido devido a não ser uma palavra reservada, 
//porém no meio do código ou indicado como resultado ele é utilizado para indicar o tipo do dado em questão, dessa forma também a palavra "number" ("n" minúsculo) pode ser utilizado para nomeação de variáveis