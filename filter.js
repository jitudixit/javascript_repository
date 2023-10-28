const prices = [100,200,300,400,500,600,700,800,900,1000];

const newarray = prices.filter((elem, index) => {
    return elem <400;
    // return elem > 1400;
});
console.log(newarray);
