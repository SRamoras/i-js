num = 11
message = ""

if(num >= 10 && num <= 20 && num !== 15){
    message = "Esta entre 10 e 20"
} 

num % 2 == 0 ? message +=" e tambem é Par" : message += " e tambem é Impar"

console.log(message)
