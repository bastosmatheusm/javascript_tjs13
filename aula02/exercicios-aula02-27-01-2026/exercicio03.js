/*
3) Elabore um algoritmo em JavaScript , que leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, exiba na tela o Salário Líquido. Veja o exemplo abaixo:
[imagem no arquivo do exercício]
*/

"use strict"
const rl = require ("readline-sync");

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontosDoColaborador;
let salarioLiquido;

do {
    salarioBruto = rl.questionFloat("\nDigite o salário bruto: R$");
    
    //Verifica e só admite valor positivo para salário bruto.
    if (salarioBruto < 0.0) {
        console.log("Valor inválido! Digite o um valor positivo.");
    }
} while (salarioBruto < 0.0);

do {
    adicionalNoturno = rl.questionFloat("\nDigite o adiconal noturno: R$");
    
    //Verifica e só admite valor positivo para adicional noturno.
    if (adicionalNoturno < 0.0) {
        console.log("Valor inválido! Digite o um valor positivo.");
    }
} while (adicionalNoturno < 0.0);

do {
    horasExtras = rl.questionFloat("\nDigite a quantidade de horas extras: ");
    
    //Verifica e só admite valor positivo para horas extras.
    if (horasExtras < 0.0) {
        console.log("Valor inválido! Digite o um valor positivo.");
    }
} while (horasExtras < 0.0);

do {
    descontosDoColaborador = rl.questionFloat("\nDigite o valor dos descontos do colaborador: R$");
    
    //Verifica e só admite valor positivo para descontos do colaborador.
    if (descontosDoColaborador < 0.0) {
        console.log("Valor inválido! Digite o um valor positivo.");
    }
} while (descontosDoColaborador < 0.0);

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontosDoColaborador;

console.log("\nSalário Líquido:",
     new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(salarioLiquido))