const funcs = [] //declara array vazio

for (var i=0; i<10; i++){
    //push é a função para inserir informações no array
    funcs.push(function(){ //declara uma função anônima para ser referenciada fora do array depois
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

/*Nesse caso devido a variável não ter escopo de bloco, no final da função quando o I ser atribuído 10
e quando for exibido ele vai pegar o I do escopo criado pelo for agora possui valor 10 */