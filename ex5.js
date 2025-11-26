 let numeros = [8, 6,7];

let soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
let media = soma / numeros.length;

if(media >= 6){
    console.log("Aprovado com média: ", media)
} else {
    console.log("Reprovado com média: ", media)
}
