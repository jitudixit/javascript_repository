const prompt = require("prompt-sync")({sigint : true});
const number = prompt("Enter the number : ");

if (number % 2 == 0){
    console.log(number +" Is even number")
}
else{
    console.log(number+ " is odd number");
}