const prompt = require("prompt-sync")({sigint : true});

const celsius = prompt("Enter the value in celsius : ");

const fahrenhit = (celsius * 1.8) +32;

console.log(celsius+" degree celsius is equal to "+fahrenhit+ " degree fahrenhit");