"use strict"
const rl = require ("readline-sync");

console.log("==================================");
console.log("CALCULADORA COM SWITCH CASE");
console.log("(+) - Soma");
console.log("(-) - Subtração");
console.log("(*) - Multiplicação");
console.log("(/) - Divisão");
console.log("==================================\n");

let num1 = rl.questionFloat("Digite o primeiro número: ", {limitMessage: 'Digite um Float'});
let num2 = rl.questionFloat("Digite o segundo número: ", {limitMessage: 'Digite um Float'});

let operacao = rl.keyIn("Digite a operação: ")

switch (operacao) {
    case "+":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;

    case "-":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    
    case "*":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    
    case "/":
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;

    default:
        console.log("Opção inválida!");
        break;
}