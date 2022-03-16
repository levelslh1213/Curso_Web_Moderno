const escola = 'C0d3r'

console.log(escola.charAt(4)) //Função que pega um caractere específico, lembrando que a contagem em programação inicia-se com 0
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //Função que pega o valor específico dentro da String e exibe dentro da tabel ask ou códio HTML relacionado a ele
console.log(escola.indexOf('d')) //Busca o valor determinado dentro da função e retorna o indice que ele está

console.log(escola.substring(1)) //Retorna os valores após o índice colocado dentro da função7
console.log(escola.substring(1, 3))// Informo começo e fim porém ele não incluirá o valor que está presente no índice final

console.log('Escola '.concat(escola).concat('!'))//Concatena os valores utilizando uma String
console.log('Escola ' + escola + '!')//O operador "+" no contexto de número representa soma, e no contexto de String representa concatenar
//Lembrando que Strings podem ser indicadas entre aspas simples(''), aspas duplas("") e Crase(``)
console.log(escola.replace(3, 'e'))//Coloca um novo valor no índice em questão
console.log(escola.replace(/\d/, 'e'))//Expressão regular(/\d/) para indicar todos os dígitos(números) (substitua todos os digitos dentro da String pelo valor 'e')
//Atenção!! o camando à cima somente substitui o primeiro valor que ele encontrar, adicionando a flag "g", que índica global ele busca todos literalmente 
console.log(escola.replace(/\d/g, 'e'))
console.log(escola.replace(/\w/, '4'))//O 'w' indica "todas as letras e dígitos", e funciona da mesma maneira acrescentando a flag "g"
console.log(escola.replace(/\w/g, '4'))
console.log('Ana, Maria, Pedro'.split(','))// A função split separa a String por um caracter indicado dentro do método, gerando um Array
console.log('Ana, Maria, Pedro'.split(/,/))//Rejex que armazena um valor
//String: Cadeia de caracteres representados dentro de aspas