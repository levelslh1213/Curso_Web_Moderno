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

const {sobrenome, bemHumorada = true} = pessoa //valor padrão
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa //Aqui ele não vai criar a variável endereço, somente as outras que estão dentro
console.log(logradouro)
console.log(numero)
console.log(cep)

const {conta: {ag, num}} = pessoa //vai dar problema pois você está tentando acessar um undefined "conta" não declarado
console.log(ag) //tomar cuidado ao tentar acessar um dado e garantir que o caminho até ele está liberado"
console.log(num)