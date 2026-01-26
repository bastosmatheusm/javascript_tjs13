const leia = require ("readline-sync");

let msg = leia.question("Digite uma mensagem: ")

console.log(msg);

let numero1 = leia.questionInt("Digite o primeiro numero: ");
let numero2 = leia.questionInt("Digite segundo numero: ");

let soma = numero1 + numero2;

console.log("A soma dos numeros e: " + soma);