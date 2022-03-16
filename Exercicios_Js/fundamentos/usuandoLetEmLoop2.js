const funcs = [] //declara array vazio

for (let i=0; i<10; i++){
    //push é a função para inserir informações no array
    funcs.push(function(){ //declara uma função anônima para ser referenciada fora do array depois
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()

/*
Devido ao let ter o escopo de bloco ele vai ter essa "memória" de qual era o valor da veriável 
quando atribuir nas funções do array

Closure - "uma variável tem noção do local em que foi definida"
*/