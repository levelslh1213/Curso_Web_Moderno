let numero = 1 //escopo mais abrangente
{
    let numero =2 //escopo menor
    console.log("Dentro = ", numero) //quando eu chamo essa função ele procura uma veriável de escopo menor e puxa o valor dela
    //JavaScript prioriza na hora de imprimir uma veriável de escopo menor
}
console.log("Fora = ", numero)

/*
possui escopo de bloco, função e global.

*/

let numero1 = 1
{
    let numero2 =2
    console.log("Dentro = ", numero1) //Aqui como ele não achou uma veriável dentro do escopo menor ele buscou no maior
}
console.log("Fora = ", numero1)
