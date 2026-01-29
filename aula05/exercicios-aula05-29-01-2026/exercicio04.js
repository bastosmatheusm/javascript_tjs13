/*
4) Uma empresa desenvolveu uma pesquisa interna para conhecer os colaboradores da área de Desenvolvimento e precisam de um sistema para analisar os dados. Escreva um algoritmo, que leia via teclado as seguintes informações de cada colaborador:
Idade (Número inteiro)
Identidade de Gênero (Número Inteiro): 
1 – Mulher Cis
2 – Homem Cis
3 – Não Binário
4 – Mulher Trans
5 – Homem Trans
6 – Outros
Pessoa Desenvolvedora (Número Inteiro):
1 – Backend
2 – Frontend
3 – Mobile
4 – FullStack
Após digitar o Tipo de Pessoa Desenvolvedora, o sistema deverá perguntar ao usuário se ele deseja continuar a leitura dos dados de um novo colaborador ou não (S/N). Caso seja pressionada a tecla N, mostre na tela:

- O número de pessoas desenvolvedoras Backend
- O número de Mulheres Cis e Trans desenvolvedoras Frontend
- O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos
- O número de Não Binários desenvolvedores FullStack menores de 30 anos
- O número total de pessoas que responderam à pesquisa
- A média de idade das pessoas que responderam à pesquisa

[imagem no arquivo do exercício]
*/

"use strict"
const rl = require ("readline-sync");

let devsBackend = 0;
let mulheresCisTransFrontend = 0;
let homensCisTransMobileMais40 = 0;
let naoBinariosFullStackMenos30 = 0;

let totalPessoas = 0;
let totalIdade = 0;
let mediaIdade;

let continua = 'S';

while (continua === 'S') {
    
    let idade = rl.questionInt("Idade: ");
    let generoId = rl.questionInt("Identidade de Gênero: ");
    let pessoaDev = rl.questionInt("Pessoa Desenvolvedora: ");

    totalPessoas++;
    totalIdade += idade;

    if (pessoaDev === 1) {
        devsBackend++;
    }

    if ((generoId === 1 || generoId === 4) && pessoaDev === 2) {
        mulheresCisTransFrontend++;
    }

    if ((generoId === 2 || generoId === 5) && idade > 40 && pessoaDev === 3) {
        homensCisTransMobileMais40++;
    }

    if (generoId === 3 && pessoaDev === 4 && idade < 30) {
        naoBinariosFullStackMenos30++;
    }

    continua = rl.keyIn("\nDeseja continuar (S/N): ").toUpperCase();
}

mediaIdade = totalIdade / totalPessoas;

console.log(`\nTotal de pessoas desenvolvedoras Backend: ${devsBackend}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulheresCisTransFrontend}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homensCisTransMobileMais40}`);
console.log(`Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${naoBinariosFullStackMenos30}`);
console.log(`O número total de pessoas que responderam à pesquisa: ${totalPessoas}`);
console.log(`A média de idade das pessoas que responderam à pesquisa: ${mediaIdade.toFixed(2)}`);