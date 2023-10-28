// Array Destructuring

// const myBioData = ['Jitendra', 'Dixit', 30];

// let myFname = myBioData[0];
// let myLname = myBioData[1];
// let myAge = myBioData[2];

// console.log(myAge);

// let [myFname, myLname, myAge] = myBioData;
// console.log(myFname);

// let [myFname, myLname, myAge, myDegree = "MCS"] = myBioData;
// console.log(myDegree);

// object Destructuring

const myBioData = {
    myFname : "Jitu",
    myLname : "Dixit",
    age : 30
}
// let age = myBioData.age;
// let myFname = myBioData.myFname;
// console.log(age);


let {myFname, myLname, age, myDegree = "MCS"} = myBioData;
console.log(age);