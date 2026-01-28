/*
6) Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.

[imagem no arquivo do exercício]
*/
"use strict"
const rl = require ("readline-sync");

let nome = rl.question("Nome do colaborador: ");
let codigoCargo = rl.questionInt("Cargo: ");
let salario = rl.questionFloat("Salário: ");

switch (codigoCargo) {
    case 1:
        console.log(`Nome do colaborador: ${nome}`);
        console.log("Cargo: Gerente");
        console.log("Salário: R$" + (salario*1.1).toFixed(2));
        
        break;

    case 2:
        console.log(`Nome do colaborador: ${nome}`);
        console.log("Cargo: Vendedor");
        console.log("Salário: R$" + (salario*1.07).toFixed(2));
        
        break;

    case 3:
        console.log(`Nome do colaborador: ${nome}`);
        console.log("Cargo: Supervisor");
        console.log("Salário: R$" + (salario*1.09).toFixed(2));
        
        break;

    case 4:
        console.log(`Nome do colaborador: ${nome}`);
        console.log("Cargo: Motorista");
        console.log("Salário: R$" + (salario*1.06).toFixed(2));
        
        break;

    case 5:
        console.log(`Nome do colaborador: ${nome}`);
        console.log("Cargo: Estoquista");
        console.log("Salário: R$" + (salario*1.05).toFixed(2));
        
        break;

    case 6:
        console.log(`Nome do colaborador: ${nome}`);
        console.log("Cargo: Técnico de TI");
        console.log("Salário: R$" + (salario*1.08).toFixed(2));
        
        break;  

    default:
        break;
}