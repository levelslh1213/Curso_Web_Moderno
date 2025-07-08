//novo recurso do es2015 - Operador de desestruturação que retira um, ou mais de um atributo de um objeto ou estrutura

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}

const {nome, idade} = pessoa 
//operador Destructuring - "tire do objeto pessoa o nome e a idade"
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa //valor padrão, se não vier nada ele usa o true
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa //Aqui ele não vai criar a variável endereço, somente as outras que estão dentro
console.log(logradouro)
console.log(numero)
console.log(cep)

//const {conta: {ag, num}} = pessoa //vai dar problema pois você está tentando acessar atributis de um undefined "conta" não declarado
console.log(ag) //tomar cuidado ao tentar acessar um dado e garantir que o caminho até ele está liberado"
console.log(num)

//-----------------------Aula 2 ------------------------
//Desestruturação de um array

//criou uma constante a que está desestruturando o array depois da atribuição e recebendo 10 na constante
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 =0 ] = [10, 7, 9, 8] //É possível ignorar e esclher posições para desestruturação
console.log(n1, n3, n5, n6)

const [, [, nota]] = [10, [11, 12]] //É possível também desestrutura objetos dentro de  objetos
console.log(nota)

const pessoa1 = {
    nome: 'julia',
    namorados: ['ricardo', 'roberto', 'junior']
}
const {nome: j, namorados: namos} = pessoa
console.log(j,namos)
const [, , namorado] = namos 
console.log(namorado)

//-----------------------Aula 3 ------------------------

// Destructurindo pode ser utilizado dentro de funções

function rand({min = 0, max = 100} /*= {min : 0, max : 0}*/){ // passar um operador de destructirindo dentro dos parâmetro siginifica que eu vou pasar um objeto como parâmetro e vou extrair dele as propriedades max e min
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //
}

const obj = {max : 50, min: 40}
console.log(rand({max : 50, min : 40}))

console.log(rand(obj))
console.log(rand({min : 50}))
console.log(rand({}))
console.log(rand()) //Dará erro se não tiver valor padrão informado conforme comentado nos parâmetros da classe

//-----------------------Aula 4 ------------------------

//Utilizando array

function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //floor arredonda para cima
}

console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([, 10])) //assume os valores máximos e mínimos
console.log(rand([])) 
//console.log(rand()) //gera erro por não conseguir ler propriedades de um array que não foi declarado por tanto é undefined

