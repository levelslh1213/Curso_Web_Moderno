console.log('teste')

a = 10e1
console.log(a)

b = 0b0101
console.log(b)

c = "pinto de asa delta"
console.log(c.length)

const age = 25;
console.log("I am " + age + " years old."); // String concatenation
console.log(`I am ${age} years old.`); // Template literal

console.log(String(Boolean("")))
console.log(typeof(String(Boolean(""))))
console.log(String(Boolean("teste")))

//em JavaScript const preve reendereçamento de veriáveis (endereço de memória) mas não mutações na mesma, como por exemplo um objeto
//Ele não deixou de ser uma objeto, mas ganhou um propriedade, seu endereçamento não mudou, só foi anexado um ponteiro novo.
const object = {}
object.teste = "teste"
console.log(object.teste)

