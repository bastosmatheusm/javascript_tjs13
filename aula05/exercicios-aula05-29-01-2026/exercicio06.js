/*
6) Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a média de todos os números digitados, que sejam múltiplos de 3. Veja o exemplo abaixo:
[imagem no arquivo do exercício]
*/
"use strict"
const rl = require ("readline-sync");

let somaMultiplosDeTres = 0;
let qtdMultiplosDeTres = 0;
let mediaMultiplosDeTres;
let num;

do {
    num = rl.questionInt("Digite um número: ");
    if (num != 0 && num % 3 == 0) {
        somaMultiplosDeTres += num;
        qtdMultiplosDeTres++;           
    }

} while (num != 0);

mediaMultiplosDeTres = somaMultiplosDeTres / qtdMultiplosDeTres;
console.log(`A média de todos os números múltiplos de 3 é: ${mediaMultiplosDeTres.toFixed(2)}`);