const prompt = require("prompt-sync")({sigint : true});

const km = prompt("Enter the value in kilometers :");

const factor = 0.621371

const miles = km * factor;

console.log(km+' kilometer is equal to '+miles+ ' miles');