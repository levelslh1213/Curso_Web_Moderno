const prod1 = {} //objeto é um conjunto de atributos e valores entre chaves
prod1.nome = 'Celular Ultra Mega' //objetos podem ter seus objetos atribuidos de forma dinâmica
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //Evite atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj:{
            blabla: 2
        }
    }
}

prod2['Desconto Legal'] = 0.40 //evitar atributos com espaço
console.log(prod2)

/* Quando trabalhamos com objeto chamamos os objetos de tipos não primitivos, ou seja ao armazenar um determinado objeto dentro de uma constante ou variável, dizemos que a atribuição é feita por referência
atribuição por referência signifia que quando armazenamos um objeto, não armazenamos direto um determinado valor, mas sim um endereço que leva a este objeto criado e armazenado dentro da memória.
Vale dizer que quando atribuimos um objeto e atribuimos o mesmo valor a outro, não damos o valor do objeto, o que b armazena é o mesme endereço que a irá armazear levando ambos ao mesmo espaço dentro da memória, portanto ao mesmo objeto*/

const a = {name: 'Teste'}
console.log(a)
const b = a
console.log(b)
b.name = 'opa'
console.log(b)
console.log(a)

/* Pode-se perceber que ao mudar o valor do atributo 'name' dentro do objeto a partir de b, não somente o valor do atributo em b mudou mas também o valor do objeto em a, pois como ambos
armazenam um endereço que leva ao objeto dentro da memória, se mudarmos um valor seja a partir de a ou b, ambos perceberão a mudança, pois ambos armazenam um mesmo endereço que leva até o espaço de memória onde encontra-se este objeto.
O que diferencia a partir de um tipo de dados considerado primitivo.*/

let c = 3
let d = c
d++
console.log(c)
console.log(d)

/* Neste caso as variáveis c e d são consideradas dados primitivos por serem do tipo Number, e o tipo de atribuição é chamado de atribuição por valor,
pois cada uma será responsável por armazenar um determinado valor diferente, independentemente da mudança de um ou de outro*/

c = c + 4
d = d + 5
console.log(c)
console.log(d)