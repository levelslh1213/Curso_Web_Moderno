var teste
teste = 'NHAA'
console.log(teste)

let teste1
teste1 = 'hello world'
console.log(teste1)
//SEMPRE UTILIZE VARIÁVEIS COM LET
/*POIS UMA DA PROPRIEDADES DE LET É QUE DEPOIS DE SER CRIADO 
UMA VEZ ESSA VARIÁVEL NÃO PODE SER DECLARADA NOVAMENTE, PORÉM
PODE SER ALTERADA*/

const teste2 = 'constraint'
console.log(teste2)
/*QUANDO UTILIZAMOS CONSTRAINT ESSA VARIÁVEL SOMENTE PODE TER VALOR ATRIBUIDO 
NO MOMENTO EM QUE FOI DECLARADA*/

/*DETALHE DE QUANDO FOR EXECUTAR O CÓDIGO JS
PODEMOS SELECIONAR O TRECHO QUE QUEREMOS E MANDAR EXECUTAR COM 
O CTRL+ALT+N*/

{
    /*console.log(scopo1)
    Neste caso não é possível acessar pois a variável foi criado num 
    afunilamento deste scopo de código*/
    {
      let scopo1 = 'scopo1'
      
        {
          console.log(scopo1)
          /* Neste caso a variável pode ser acessada devido a estar dentro do 
          scopo principal onde foi declarada*/
            {
                {
                    //SCOPO
                }
            }
        }
    }
}

/*
SCOPO É O BLOCO DE CÓDIGO DEFINDO POR {} QUE LIMITA E EXECUÇÃO DE UM PROCESSO 

DETALHES:
VARIÁVEIS DECLARADAS DENTOR DE UM SCOPO ESPECÍFICO NÃO PODEM SER MENSIONADAS
EM OUTROS PONTOS FORA DESTE SCOPO
*/

//---------teste de função------------

function soma(n1, n2){
    let soma
    soma = n1 + n2
    console.log(soma)
}

soma(1,2)

//-------------------------------------

//testes tipagem fraca-----------------

let variavel3 = 'legal demais'
console.log(variavel3)
console.log(typeof variavel3)
//OU
let type1 = typeof variavel3
console.log(type1)
//typeof comando que mostra o tipo de determinada variável

variavel3 = 35
console.log(typeof variavel3)

varialvel3 = 35.555555555555
console.log(typeof variavel3)

let valor1 = '', numero = 1, pqp = 'produto químico perigoso é o meu pinto. isso é puta que pariu'

console.log(valor1, numero, pqp)
