const promt = require("prompt-sync")({sigint : true});
const year = promt('Enter a year : ');

if (year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log("Ther year "+year+" is a leap year");
        }
        else{
            console.log("The year "+year+" is not a leap year");
        }

    }
    else{
        console.log("The year "+year+" is leap year");
    }
}
else{
    console.log("Ther year "+year+ " is not a leap year");
}