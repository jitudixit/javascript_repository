const prompt = require("prompt-sync")({sigint : true});

const number1 = parseFloat(prompt("Enter the first number : "));
const number2 = parseFloat(prompt("Enter the second number : "));
const number3 = parseFloat(prompt("Enter the thired number : "));

const maxnumber = Math.max(number1, number2, number3);
const minumamnumber = Math.min(number1,number2,number3);

console.log("Largest number is : " +maxnumber);
console.log("Smalest number is : "+ minumamnumber);