const prompt = require("prompt-sync")({sigint : true});
const number = parseInt(prompt("Enter the Any Number to check positive negative or zero : "));

if (number>0){
    console.log(number+' is posivtive number');
}
else if (number == 0){
    console.log(number+ ' is zero number');
}


else {
    console.log(number+ ' is negative number');
}