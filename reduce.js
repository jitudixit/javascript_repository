let arr = [2,3,4];
let sum = arr.reduce((accumulator, curElem, index, arr)=>{
    return accumulator += curElem;
},7)
console.log(sum);