const array1 = [1,2,3,44,54,34];
//num >9
// let newarr = array1.map((curElem,index,arr)=>{
//     return curElem > 9;
// });
// console.log(array1);
// console.log(newarr);

let newarr = array1.map((curElem,index,arr)=>{
    return `Index no = ${index} and the value is ${curElem} belong to ${arr}`
});
console.log(newarr);