/*8) Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. Em seguida, mostre na tela:
- Todos os elementos dos índices ímpares do vetor 
- Todos os elementos do vetor que são números pares
- A Soma de todos os elementos do vetor
- A Média de todos os elementos do vetor, armazenada em uma variável do tipo real

[imagem no arquivo do exercício]
*/
"use strict"
const rl = require ("readline-sync");

let elementosNosIndicesImpares = "";
let elementosPares = "";
let somaElementos = 0;

let vetor = Array(10);

for (let i = 0; i < vetor.length; i++) {

    let num = rl.questionInt();
    vetor[i] = num;

    if (i % 2 != 0) {
        elementosNosIndicesImpares += vetor[i] + " ";

    }

    if (vetor[i] % 2 == 0) {
        elementosPares += vetor[i] + " ";

    }

    somaElementos += num;
}
console.log("\nElementos nos índices ímpares:");
console.log(elementosNosIndicesImpares);
console.log("Elementos pares:");
console.log(elementosPares);
console.log(`Soma: ${somaElementos}`);
console.log(`Média: ${(somaElementos / vetor.length).toFixed(2)}`);


