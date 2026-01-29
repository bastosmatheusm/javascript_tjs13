const rl =  require("readline-sync");

let num = rl.questionInt("Digite um número inteiro: ")
let i = 1;

while (i <= 10) {
    console.log(`Tabuada de ${num}: ${num} x ${i} = ${num * i}`);
    i++;
}