/*
2) Elabore um algoritmo em JavaScript que leia 4 notas de um participante, exiba na tela a média final do participante. Veja o exemplo abaixo:
[imagem no arquivo do exercício]
*/
"use strict"
const rl = require ("readline-sync");

//Define quantidade de notas de acordo com o usuário.
let quantidadeDeNotas = rl.questionInt("Digite a quantidade de notas do participante: ");

//Cria uma matriz (array) com tamando definido pela variável quantidadeDeNotas.
const notas = [];

//Acumula as notas para calcular média posteriormente.
let somaDasNotas = 0;

//Declara variável que será usada para calcular a média.
let mediaDasNotas;

for (let i = 0; i < quantidadeDeNotas; i++) {
    notas [i] = rl.questionFloat(`Nota ${i+1}: `);
    somaDasNotas += notas[i];
    
}

//Atribui calculo da média à variável mediaDasNotas.
mediaDasNotas = somaDasNotas / quantidadeDeNotas;

//Imprime a média formatada para uma casa decimal, como no enunciado da questão.
console.log(`\nMédia final: ${mediaDasNotas.toFixed(1)}`)