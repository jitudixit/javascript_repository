const prompt = require("prompt-sync")({sigint : true});
let a = parseInt(prompt("First Number : "));
let b = parseInt(prompt("Second Number : "));

// const temp = require("")
// let = temp;


let temp = a;
console.log("new value of temp : ",temp);
a = b;
console.log("new value of a : ", a);
b = temp;
console.log("new value of b : ",b);

console.log("The value of a after swaping : ",a);
console.log("The value of b after swaping : ",b);