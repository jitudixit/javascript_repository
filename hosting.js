// hosting in javascript
// console.log(myName);
// var myName;
// myName = "jitu";


// scope chanin in javaseript

// const PI = 3.147;

//global scope
//lexical environment  
let a = "Hello guys";

const first = () => {
    let b = "How are you? "

        const second = () => { 
            let c = " Hii, I am fine thank you ";
            console.log(a+b+c);
        }
        second();
}
first();