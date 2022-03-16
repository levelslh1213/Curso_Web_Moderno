//Par nome/valor

const saudacao = 'Oba' //contexto léxico 1 - Local "Físico" onde foi definido o par

function exec(){
    const saudacao = 'Faalaa' //Contexto léxico2
    return saudacao //como estão em contextos diferentes ele não tem conflito
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: { //não irá conflitar atribuição de valor pois estão em contextos diferentes "Endereço" e "Cliente"
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)