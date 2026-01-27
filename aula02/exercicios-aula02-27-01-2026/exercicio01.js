/*
1) Dado o Fluxograma abaixo, desenvolva o algoritmo abaixo na Linguagem JavaScript:
 [imagem no arquivo do exercício]
 */

"use strict"
const rl = require ("readline-sync");

let salario;
let abonoSalarial;
let novoSalario;

do {
    salario = rl.questionFloat("\nDigite o salário: R$");
    
    //Verifica e só admite valor positivo para salário.
    if (salario < 0) {
        console.log("Valor inválido! Digite o um valor positivo.");
    }
} while (salario < 0);


do {
    abonoSalarial = rl.questionFloat("Digite o abono: R$");

    //Verifica e só admite valor positivo para abono.
    if (abonoSalarial < 0) {
        console.log("Valor inválido! Digite o um valor positivo.");
    }
} while (abonoSalarial < 0);

//Soma o salário bruto com o abono salarial e atribui a variável novoSalario.
novoSalario = salario + abonoSalarial;

//Saída formatada para BRL (Real)
console.log("\nO valor do salário com acréscimo do abono salarial é:",
     new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(novoSalario));

//console.log(`\nO valor do salário com acréscimo do abono salarial é: R$${novoSalario.toFixed(2)}`); Para formatar para apenas casas decimais, sem fazer localização da moeda