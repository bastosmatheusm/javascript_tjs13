/*
2) Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo. Veja os exemplos abaixo:
[imagem no arquivo do exercício]
*/
"use strict"
const rl = require ("readline-sync");

let num = rl.questionInt("Digite um número: ");

if (num % 2 == 0 && num > 0) {
    console.log(`O Número ${num} é par e positivo!`);

} 
else if (num % 2 != 0 && num < 0) {
    console.log(`O Número ${num} é ímpar e negativo!`);
    
}
else if (num % 2 == 0 && num < 0) {
    console.log(`O Número ${num} é par e negativo!`);
    
}
else {
    console.log(`O Número ${num} é ímpar e positivo!`);

}
