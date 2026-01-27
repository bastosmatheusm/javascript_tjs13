"use strict"
const leia = require ("readline-sync");

let ong = "Generation Brasil";
let turma = "Turma JavaScript 13";

let numero1 = leia.questionInt("Digite o primeiro valor: ");
let numero2 = leia.questionInt("Digite o segundo valor: ");
let resultado = numero1 + numero2;

console.log("A " + turma + " da " + ong + " começou!");
//Concatenação de strings declaradas nas variáveis

console.log(`A ${turma} da ${ong} começou!`);
//Interpolação para unir strings

console.log(`O resultado da soma do ${numero1} com ${numero2} é igual a ${resultado}`);