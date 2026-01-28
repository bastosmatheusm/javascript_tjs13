/*
4) Escreva um algoritmo que leia 3 palavras (string), que definem as características de um tipo de animal, segundo o diagrama abaixo, que deve ser lido da esquerda para a direita.
[imagem no arquivo do exercício]
*/
"use strict"
const rl = require ("readline-sync");

let tipoEsqueleto = rl.question("Digite o tipo de esqueleto do animal: ").toLocaleLowerCase();
let classeAnimal = rl.question("Digite a classificação do animal: ").toLocaleLowerCase();
let tipoAlimentacao = rl.question("Digite o tipo de alimentação do animal: ").toLocaleLowerCase();

if (tipoEsqueleto === "vertebrado") {
    if (classeAnimal === "ave") {

        if (tipoAlimentacao === "carnivoro") {
            console.log("Águia");

        }
        else {
            console.log("Pomba");

        }
    }
    else if (classeAnimal === "mamifero") {

            if (tipoAlimentacao === "onivoro") {
                
            console.log("Homem");

        }
        else if (tipoAlimentacao === "herbivoro") {

            console.log("Vaca");
            
        }
        
    }
    
}
else if (tipoEsqueleto === "invertebrado") {
    if (classeAnimal === "inseto") {

        if (tipoAlimentacao === "hematofago") {
            console.log("Pulga");

        }
        else {
            console.log("Lagarta");

        }
    }
    else if (classeAnimal === "anelideo") {

            if (tipoAlimentacao === "hematofago") {
                
            console.log("Sanguessuga");

        }
        else if (tipoAlimentacao === "onivoro") {

            console.log("Minhoca");
            
        }
        
    }
    
}