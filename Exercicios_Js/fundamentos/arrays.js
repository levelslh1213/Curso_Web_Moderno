//Estrutura de dados que abriga mútiplos valores indexados, de acordo com a ordem padrão de programação
//array em JavaScript ele é heterogêneo, podendo abrigar vários tipos de dados em um único array, e é flexivel podendo aumentar o tamanho conforme a necessidade
const arrayList = [ 7.7, 8.9, 6.3, 9.2]
console.log(arrayList[0], arrayList[3])//estrutura indexada
console.log(arrayList[4])//Índice não exitente dentro do array


arrayList[4] = 10 //Adicionando na lista
console.log(arrayList)

arrayList[10] = 11
console.log(arrayList)//Neste caso ele demonstra o número de itens vazios se adicionado um item muito a frente na indexação da lista
console.log(arrayList.length)//Mostra o número de itens dentro de um array

arrayList.push({id: 3}, false, null, 'teste')//Adiciona itens numa lista, mostrando a estrutura heterogênea do array

console.log(arrayList.pop())//Retira o último valor do array
delete arrayList[0]//Deleta itens de um array
console.log(arrayList)

console.log(typeof arrayList)//ArrayList sempre é um objeto
//Array - estrutura indexada e heterogênea 
