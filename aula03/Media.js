"use strict"
const rl = require ("readline-sync");

let media = rl.questionFloat("Digite a média do aluno: ");

if (media >= 7) {
    console.log("Aluno aprovado!");
}
else if (media >=5 && media < 7) {
    console.log("Aluno de exame!");
}
else {
    console.log("Aluno reprovado!");
}