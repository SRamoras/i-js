// var prompt = require('prompt-sync')();
// var number = prompt('Insira um numero? ');

// function handleNumber(number){
//     console.log(
//     number === 15
//         ? "O numero é 15"
//         : "O numero nao é 15"
//     );

//     if (number % 5 === 0) {
//         console.log('O numer é multiplo de 5');
//         console.log('Funcao interrompida');
//         return;
//     }

//     console.log(
//     number > 10 && number <= 20
//         ? 'O número está entre 10 e 20'
//         : 'O número nao está entre 10 e 20'
//     );
// }
// handleNumber(number)
// arrayNumerosMultiplosDe3 = []
// for(count = 1; count <= 10; count++){
//     arrayNumerosMultiplosDe3.push(3 * count)
// }
// console.log(arrayNumerosMultiplosDe3)




// adicional
arrayNumerosMultiplosDe3Random = []

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createIntegers(arrayNumerosMultiplosDe3Random){
    for(count = 1; count <= 100; count++){
        arrayNumerosMultiplosDe3Random = [...arrayNumerosMultiplosDe3Random, 3 * getRandomInt(100)]
    }
}

createIntegers()
console.log(arrayNumerosMultiplosDe3Random)

export {createIntegers}