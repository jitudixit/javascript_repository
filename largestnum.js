const prompt = require("prompt-sync")({sigint : true});

const number1 = parseInt(prompt("Enter first number : "));
const number2 = parseInt(prompt("Enter second number : "));
const number3 = parseInt(prompt("Enter thired number : "));
let result;

if (number1 >= number2 && number1 >= number3){
    // console.log(number1+ ' is largest number');
    result = number1;
}

else if (number2 >= number1 && number2 >= number3){
    // console.log(number2 + ' is the largest number');
    result = number2;
}

else{
    // console.log(number3+ ' is the largest number')
    result = number3;
}

console.log('largest number is : ',result);