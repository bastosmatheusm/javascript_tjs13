const rl =  require("readline-sync");

let num = rl.questionInt("Digite um número inteiro: ")

for (let i = 1; i <= 10; i++) {
    console.log(`Tabuada de ${num}: ${num} x ${i} = ${num * i}`);
    
}