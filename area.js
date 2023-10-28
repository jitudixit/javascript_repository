const prompt = require("prompt-sync")({sigint : true});
// const base = prompt('Enter base of triangle :');
// const height = prompt('Enter height of triangle :');

// const area = (base*height)/2

// console.log("Area of " +base+ " height" +height+ " is : " +area);

const number1 = parseInt(prompt("Enter the one side of triangle : "));
const number2 = parseInt(prompt("Enter the second side of triangle : "));
const number3 = parseInt(prompt("Enter the thired side of triangle : "));

const s = (number1 + number2 + number3) / 2;
console.log("Semi peramiter =",s);

const area = Math.sqrt(
    s * (s-number1) * (s-number2) * (s-number3)
);

console.log('area of '+number1+ ", " + number2+ " and " + number3+ " is : "+area);