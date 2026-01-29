/*
1) Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. 
No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5. Veja os exemplos abaixo:
[imagem no arquivo do exercício]
*/

"use strict"
const rl = require ("readline-sync");

let num1 = rl.questionInt("Digite o primeiro número do intervalo: ");
let num2 = rl.questionInt("Digite o segundo número do intervalo: ");

console.log();

if (num1 < num2) {
    
    for (let i = num1; num1 <= num2; num1++) {
        if (num1 % 3 == 0 && num1 % 5 == 0) {
            console.log(`${num1} é múltiplo de 3 e 5`);
        }
        
    }

}
else {
    
    console.log("Intervalo inválido!");

}