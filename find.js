const prices = [200,300,400,500,600];
// const findElem = prices.find((currVal) => {
//     return currVal < 400;
// });
// console.log(findElem);
//flat arow function
console.log( prices.find((currVal) => currVal<400));
console.log( prices.find((currVal) => currVal>1400));
//find index number of less then value or place of valu
//if value is not found the out pit is -1
console.log( prices.findIndex((currVal) => currVal>1400));