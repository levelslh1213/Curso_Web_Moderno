//Operadores relacionais

console.log('01)', '1' == 1)
//operador relacional de comparação
//Compara apenas valores indepentes do tipo
console.log('02)', '1' === 1)
//operador estritamente igual
//Compara valores e tipos de dados
console.log('03)', '3' != 3)
//operador diferente
console.log('04)', 3 !== 3)
//operador estritamente diferente
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
//se trabalhamos com variáveis não importa se usar os igual ou estritamente igual pois o javascript compara endereços na memória
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
//Extrai os valores das datas e retorna um integer com os milisegudnos
console.log('12)', undefined == null)
console.log('13)', undefined === null)

//via de regra é melhor utilizar os operadores estritos