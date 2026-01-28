/*
7) Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. O programa deverá ler dois números reais: numero1 e numero2, e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4). A seguir, mostre na tela o resultado da operação entre os 2 números. Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!
[imagem no arquivo do exercício]
*/
"use strict"
const rl = require ("readline-sync");

console.log("==================================");
console.log("CALCULADORA COM SWITCH CASE");
console.log("(1) - Soma");
console.log("(2) - Subtração");
console.log("(3) - Multiplicação");
console.log("(4) - Divisão");
console.log("==================================\n");

let num1 = rl.questionFloat("Digite o primeiro número: ", {limitMessage: 'Digite um Float'});
let num2 = rl.questionFloat("Digite o segundo número: ", {limitMessage: 'Digite um Float'});

let operacao = rl.questionInt("Digite a operação: ")

switch (operacao) {
    case 1:
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;

    case 2:
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    
    case 3:
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    
    case 4:
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;

    default:
        console.log("Opção inválida!");
        break;
}