/*
9) Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida, mostre na tela:
- Todos os elementos da Diagonal Principal
- Todos os elementos da Diagonal Secundária
- A Soma de todos os elementos da Diagonal Principal
- A Soma de todos os elementos da Diagonal Secundária
[imagem no arquivo do exercício]
*/
"use strict"
const rl = require ("readline-sync");

let matriz = new Array(3);
let elementosDiagonalPrincipal = "";
let somaDiagonalPrincipal = 0;
let elementosDiagonalSecundaria = "";
let somaDiagonalSecundaria = 0;

for(let i = 0; i < matriz.length; i ++){
    matriz[i] = Array(3);
}

for (let linha = 0; linha < matriz.length; linha ++){
    for (let coluna = 0; coluna < matriz[linha].length; coluna ++){
       matriz[linha][coluna] = rl.questionInt(`matriz[${linha}][${coluna}] = `);

       if (linha == coluna) {
        somaDiagonalPrincipal += matriz[linha][coluna];
        elementosDiagonalPrincipal += matriz[linha][coluna] + " ";
        
       }
       
       if (linha + coluna === 2){
        somaDiagonalSecundaria += matriz[linha][coluna];
        elementosDiagonalSecundaria += matriz[linha][coluna] + " ";
       }
    }
}

console.log("\nElementos da Diagonal Principal:");
console.log(elementosDiagonalPrincipal);
console.log("Elementos da Diagonal Secundária:");
console.log(elementosDiagonalSecundaria);
console.log("Soma dos Elementos da Diagonal Principal:")
console.log(somaDiagonalPrincipal);
console.log("Soma dos Elementos da Diagonal Secundária:");
console.log(somaDiagonalSecundaria);