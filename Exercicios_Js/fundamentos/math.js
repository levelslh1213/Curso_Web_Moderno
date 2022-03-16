const raio = 5.6
const area = Math.PI * Math.pow(raio, 2) 

/*O Objeto "Math", é utilizado para alguns calculos matématicos como exponenciação e admissão de alguns valores
 *Neste caso "Math.PI" é utilizado para resgatar o valor de PI (3,1415...).
 *"Math.pow()" é utilizado para exponenciação utilizando um valor antes da vírgula para a base, e depois da vígula para o expoente
*/
 console.log(area)
 console.log(typeof area)
 console.log(typeof Math)
 console.log(area.toFixed(2)) // É possível utilizar a função "ToFixed" na variável "area" pois mesmo utilizando do objeto "Math" e algumas de suas funções ele continua a retornar um número, por isso se mantem "number" podendo-se aplicar a função "ToFixed"