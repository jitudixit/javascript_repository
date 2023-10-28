//fatten array
//2D and 3D arraye covert in single Dimention array
const arr = [
    ['zone1','zone2'],
    ['zone3','zone4'],
    ['zone5','zone6'],
    ['zone7','zone8',['zone7', 'zone8'],['zone9']],
];
// let flatArr = arr.reduce((accum, curVal)=>{
//     return accum.concat(curVal)
// })
console.log(arr.flat(2));