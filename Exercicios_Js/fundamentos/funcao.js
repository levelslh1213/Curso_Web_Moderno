console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

//FUNÇÃO SEM RETORNO 

//função é um bloco de código com um nome e instruções afim de ser reutilizada, estta recebe parâmetros de entrada e é executado as instruções e retornam um determinado valor ou dado

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6,7)
imprimirSoma()

//função com retorno

function soma(a, b = 0){ //aqui se você declara um valor para a variável, ele continua mutável, dessa forma você pode declarar novamente um valor que a ide irá considerar o valor ainda, porém se esta não for declarada, por padrão ele tem um determinado valor que nesse caso é 0
    return a + b
}

soma(2, 3) //a função com retorno propriamemente dita não imprimi valores no console
console.log(soma(2))//é necessário a utilização do comando console.log
console.log(soma(2, 3))
console.log(soma())

//Armazenando uma função em uma variável

const adicao = function /* função sem nome: anônima utilizada em casos de função dentro de um outro dado*/ (a, b) {
console.log(a+b)
}

adicao(2, 3)

//Armazenando uma função arrow em uma variável
// função arrow são maneiras reduzidas de se criar uma função
const adcao = (a, b) => {
    return a + b
}
console.log(adcao(2, 3))

//retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(3, 2))

const imprimir2 = a => console.log(a)
imprimir2('Cool!!')