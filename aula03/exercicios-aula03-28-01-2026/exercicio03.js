/*
3) Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). Conforme as Regras para a doação de sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto para doar sangue. Veja os exemplos abaixo:
[imagem no arquivo do exercício]
*/
"use strict"
const rl = require ("readline-sync");

let nome = rl.question("Digite o Nome do doador: ");
let idade = rl.questionInt("Digite a Idade do doador: ");
let primeiraDoacao = rl.question("Primeira doação de sangue? ").toLocaleLowerCase() === "true";

if (idade >= 18 && idade < 60) {
    console.log(`${nome} está apto(a) para doar sangue!`);

}
else if (idade >= 18 && idade <= 69 && primeiraDoacao === false) {
    console.log(`${nome} está apto(a) para doar sangue!`);

}
else {
    console.log(`${nome} não está apto(a) para doar sangue!`)

}