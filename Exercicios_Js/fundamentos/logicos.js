//Estudar lógica e lógica computacional
// tabela verdade (AND)
// v and v -> v
// v and f -> f
// f and f -> f
// f and v -> f

// tabela verdade (OR)
// v or v -> v
// v or f -> v
// f or v -> v
// f or f -> f

//tabela verdade (XOR -> Exclusivo verdadeiro {operandos diferentes})
// v xor v -> f
// v xor f -> v
// f xor v -> v
// f xor f -> f

// !v -> f
// !f -> v

// Operador lógico normal possui duas vezes o mesmo símbolo, por exemplo o AND(&&) e o OR(||)
// se você utilizar o símbolo apenas uma vez, ele se torna um comparador "bitwise" que realiza
// uma comparação bit a bit das variáveis aplicadas

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const 
}