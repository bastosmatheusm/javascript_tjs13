const rl =  require("readline-sync");

let num = rl.questionInt("Digite um número inteiro: ");
let i = 1;

do {
    console.log(`Tabuada de ${num}: ${num} x ${i} = ${num * i}`);
    i++;
} while (i <= 10);