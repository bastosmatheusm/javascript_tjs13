"use strict"

let nome = "Matheus";
let profissao = "Pessoa Desenvolvedora";

let salarioBruto = 3500.90;
const bonus = 0.05;
//numero = 10;

//console.log(numero);

console.log("Tipo da variável nome é :", typeof (nome));

if (salarioBruto > 1000.00) {
    console.log("Salário > 1000,00")

}

console.log("Salário Liquído: ",
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL,' }).format(salarioBrut + (bonus * salarioBruto)) //Formatação para moeda brasileira (real)
)