let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

console.log(!!3)// Os dois sinais de negação "!!" forçam a conversão do resultado de uma sentença para o boolean criando uma condição

isAtivo = 1
console.log(!!isAtivo)
console.log(!isAtivo)
console.log(!!true)//Nega duas vezes volta para a origem
console.log(!true)//Nega um vez "se não é verdadeito, é falso"

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-3)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = 0))

console.log('Os Falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN) 
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra Finalizar...')
console.log(!!('' || null || 0 || 'epa' || 123))//Retorna se há número verdadeiros
console.log(('' || null || 0 || 'epa' || 123))//retorna o primeiro valor verdadeito

let nome = ''
console.log(nome || 'Desconhecido')//Irá imprimir o valor se a variável estiver vazia

