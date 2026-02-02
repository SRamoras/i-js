// desafio 28/1/2026
// num = 10

// if (num === 5 || num === 10 || num === 15) {
//     return;
// }

// console.log(num >= 10 && num <= 20 && num !== 15 
//     ? "Esta entre 10 e 20 e nao é 15" 
//     : "")



// desafio adicional
function haddleNum(num){

    if (num % 5 === 0) {
        console.log("É multiplo de 5");
        return;
    }

    console.log(num >= 10 && num <= 20 && num !== 15 
        ? "Esta entre 10 e 20 e nao é 15" 
        : "")
}


var prompt = require('prompt-sync')();
var num = Number(prompt('Insira um numero? '));

haddleNum(num)