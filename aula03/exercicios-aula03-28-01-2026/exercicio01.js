/*
1) Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.
[imagem no arquivo do exercício]
*/
"use strict"
const rl = require ("readline-sync");

let numA = rl.questionInt("Digite o número A: ");
let numB = rl.questionInt("Digite o número B: ");
let numC = rl.questionInt("Digite o número C: ");

if (numA + numB > numC) {
    console.log(`\n${numA} + ${numB} = ${numA + numB} > ${numC}`);
    console.log("A Soma de A + B é Maior do que C");

}
else if (numA + numB < numC) {
    console.log(`${numA} + ${numB} = ${numA + numB} < ${numC}`);
    console.log("A Soma de A + B é Menor do que C")
    
}
else {
    console.log(`${numA} + ${numB} = ${numA + numB} = ${numC}`);
    console.log("A Soma de A + B é Igual a C")

}