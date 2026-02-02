var prompt = require('prompt-sync')();

var num = prompt('Insira um numero? ');

message = ""

if(num >= 10 && num <= 20 && num !== 15){
    message = "Esta entre 10 e 20 e nao é 15"
} 

// num % 2 == 0 ? message +=" e tambem é Par" : message += " e tambem é Impar"

console.log(message)


if(f === banana){
    console.log("é banana")
}