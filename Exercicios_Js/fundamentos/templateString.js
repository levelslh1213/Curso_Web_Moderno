const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
//Dentro de uma String eu não posso quebra-la no meio, pois não é possível considerar as quebras de linha
const template = 
`
Olá
${nome}!
`
//O Template-String considera as quebras de linha feitas, e faz a interpolação que é converter a variável dentro do próprio texto
console.log(concatenacao, template)

//Expressões...

console.log(`1 + 1 = ${1 + 1}`)//Fará a interpolagem realizando a soma

const up = texto => texto.toUpperCase()

console.log(`Ei...${up('cuidado')}!`)