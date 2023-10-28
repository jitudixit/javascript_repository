const prompt = require("prompt-sync")({sigint : true});
const number = prompt('Enter the Number :');

const result = Math.sqrt(number);

console.log('The Square root of ' +number+ ' is ' +result);