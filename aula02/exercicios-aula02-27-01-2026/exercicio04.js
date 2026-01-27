/*
4) Leia quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4. Veja os exemplos abaixo:
[imagem no arquivo do exercício]
*/

"use strict"
const rl = require ("readline-sync");

let numero1 = rl.questionFloat("numero1: ")
let numero2 = rl.questionFloat("numero2: ")
let numero3 = rl.questionFloat("numero3: ")
let numero4 = rl.questionFloat("numero4: ")

let difProdutoDosValores = (numero1 * numero2) - (numero3 * numero4);

console.log(`Diferença:${difProdutoDosValores.toFixed(1)}`);