console.log(7/0) //JS tem um tipo de dados retornados para esse tipo de operção chamado infínity, no caso seriam números inesistentes
console.log("10"/2) //Aqui o JS Identifica o conteúdo da String como um número e converte automaticamente para o tipo "number"
console.log("10.2" / 2) //Neste caso o JS não consegue identificar que o conteudo da String é um número e por isso retorna "NaN" - Not a Number.
console.log("10,2" * 2) //Lembrando que "," é um indicador de casas decimais brasileiro e como as linguagens seguem um padrão universal do inglês é utilizado "." invés de "," por isso alguns número são chamados de "pontos flutuantes", por terem a variante de casas decimais
console.log('3' + 2)//neste caso o número irá concatenar pois a String tem preferência dentro da sentença
console.log('3' - 2)//Neste caso a operação será feita pois o operador "-" não representa valor lógico para uma String
console.log("Show!" * 2) //Geralmente, em outras linguagens a multiplicação de uma String, neste caso não idêntificada como "number", repetiria o número de vezes em que este valor de String seria exibido, porém no JS isto não funciona e é retornado "NaN"
console.log(0.1 + 0.7) //Algumas operações em JS terão algumas inprecisões devido a especificação de operações lógicas admitidas pela linguagem, no caso sendo mais rápida que o a maioria dos processamentos
//console.log(10.ToString()) // Não é possível realizar esta conversão pois a função "ToString" pertence a tipagem/classe de Number e outras, e como o "10" está escrito de forma literal, sem especificação de tipagem este método não pode ser aplicado
console.log((10.451).toFixed(2)) //*Acho - esta afirmação não tem 100% de certeza - que quando colocamos um parenteses o JS admite o número espresso dentro dele como "number" por isso o método pode ser aplicado
//Os números espressos dentro de um comando sem específicações e não apresentados dentro ou específicado como uma variável são chamados de "números literais"
console.log("That was the class guys, have a good day")
