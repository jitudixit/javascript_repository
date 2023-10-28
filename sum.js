// const num1 = 4;
// const num2 = 5;

// const sum = num1 + num2;

// console.log("sum = ",sum);
// console.log("The sum of " + num1 + " and " + num2 + " is : " + sum);

const prompt = require("prompt-sync")({sigint : true});
var num1 = parseInt(prompt('Enter the first number : '));
var num2 = parseInt(prompt('Enter the second number : '));

var sum = num1 + num2;

console.log('The sum of ' +num1+ ' and ' +num2+ ' is :' +sum);

