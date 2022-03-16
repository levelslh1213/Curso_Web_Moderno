let valor // não inicializada
console.log(valor) // undefined pois inicialmente não possui valor declarado, não foi unicializada
//console.log(valor2) Neste caso a variavel valor2 nem mesmo foi criada e declarada dentro do sistema, diferente do valor que foi declarada porém não inicializada

valor = null //ausencia de valor, não possui nenhum endereço, portanto não aponta para nenhum espaço de memória
console.log(valor) //Sempre, dentro de um processo de programação, que quiser zerar algum determinado valor, use sempre o null
//console.log(valor.toString()) Não é possível acessar algo em uma variável nula ERRO

const produto = {}
console.log(produto.preco)//indefinido pois o produto está definido, mas o atributo dentro do produto não existe
//console.log(produto.preco.a)//Dará erro pois não consigo acessar atributo ou valor de algo indefinido
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined //evite atribuir de forma explicita undefined
console.log(!!produto.preco)
//delete produto.preco exclui um determinado atributo de um objeto 
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)