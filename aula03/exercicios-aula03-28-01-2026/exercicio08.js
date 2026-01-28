/*
8) Desenvolva um algoritmo que simule as operações básicas de uma Conta Bancária. O programa deverá ler o tipo da operação a ser realizada com base na tabela abaixo (número inteiro entre 1 e 3) e o valor a ser depositado ou sacado (somente nas opções 2 e 3). Considere que um saque só pode ser realizado caso haja saldo suficiente. Ao final de cada operação, exiba o novo Saldo na tela. A variável saldo (número real), será inicializada com o valor de R$ 1000.00. Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!
[imagem no arquivo do exercício]
*/
"use strict"
const rl = require ("readline-sync");

let codigoOperacao = rl.questionInt("Operação: ");
let saldo = 1000.00;

switch (codigoOperacao) {
    case 1:
        console.log("Operação - Saldo");
        console.log("Saldo: R$" + saldo.toFixed(2));    

        break;

    case 2:
        console.log("Operação - Saque");
        let saque = rl.questionFloat("Valor: R$ ")
        if (saldo >= saque) {
            saldo -= saque;
            console.log("Novo Saldo: R$" + saldo.toFixed(2));
        }
        else{
            console.log("Saldo Insuficiente!");
        }

        break;

    case 3:
        console.log("Operação - Saque");
        let deposito = rl.questionFloat("Valor: R$ ")
        saldo += deposito;
        console.log("Novo Saldo: R$" + saldo.toFixed(2));

        break;

    default:
        console.log("Operação Inválida!")
        break;
}
