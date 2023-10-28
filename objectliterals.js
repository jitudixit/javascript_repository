// How to create an object

//1st way

// let bioData = "Jitendra";
// console.log(bioData);

// let bioData = {
//     myName : "Jitendra",
//     myAge : 30,
//     getData : function(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }
// bioData.getData();


//2nd way no need to write function as well after es6

// let bioData = { 
//         myName : "Jitendra",
//         myAge : 30,
//         getData (){
//             console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//         }
//     }
//     bioData.getData();

//What if we want oject as a  value inside an object

// let bioData = {
//         myName : {
//             realName : "Jitu",
//             channelName : "dixtprogramer",
//         },
//         myAge : 30,
//         getData(){
//             console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//         }
//     }
//     // bioData.getData();
//     console.log(bioData.myName.channelName);


// This object  

//  console.log(this);
// console.log(this.alert('awesome'));
// let myNames = "vinode";
// function myName(){
//     console.log(this.myNames);
// }
// myName();

// const obj = {
//     myAge :30,
//     myName(){
//         console.log(this.myAge);
//     }
// }
// obj.myName();

// const obj = {
//     myAge : 26,
//     myName : () => {
//         console.log(this);
//     }
// }
// obj.myName();



let bioData = {
    myName : {
        realName : "Jitu",
        channelName : "dixtprogramer",
    },
    myAge : 30,
    getData(){
        console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge}`);        
    }
}
bioData.getData();
    