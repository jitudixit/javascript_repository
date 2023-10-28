const months = ['jan', 'july', 'may', 'march', 'aug'];
// const updateMonth = months.splice(1,1,'July');
const indexOfMonth = months.indexOf("may");
if(indexOfMonth != -1){
    const updateMonth = months.splice(indexOfMonth,1,'May');
    console.log(months);
}
else{
    console.log("No data match");
}

