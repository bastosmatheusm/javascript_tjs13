/*
5) Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.
[imagem no arquivo do exercício]
*/
"use strict"
const rl = require ("readline-sync");

let codigoProduto = rl.questionInt("Código do Produto: ");
let qtdProduto = rl.questionInt("Quantidade: ");


switch (codigoProduto) {
    case 1:
        console.log("Produto: Cachorro Quente");
        console.log("Valor total: R$" + (qtdProduto*10.00).toFixed(2))
        
        break;

    case 2:
        console.log("Produto: X-Salada");
        console.log("Valor total: R$" + (qtdProduto*15.00).toFixed(2))
        
        break;

    case 3:
        console.log("Produto: X-Bacon");
        console.log("Valor total: R$" + (qtdProduto*18.00).toFixed(2))
        
        break;

    case 4:
        console.log("Produto: Bauru");
        console.log("Valor total: R$" + (qtdProduto*12.00).toFixed(2))
        
        break;

    case 5:
        console.log("Produto: Refrigerante");
        console.log("Valor total: R$" + (qtdProduto*8.00).toFixed(2))
        
        break;

    case 6:
        console.log("Produto: Suco de laranja");
        console.log("Valor total: R$" + (qtdProduto*13.00).toFixed(2))
        
        break;  

    default:
        break;
}