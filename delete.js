const months = ['jan', 'july', 'may', 'march', 'aug'];

const indexOfMonth = months.indexOf('aug');

if (indexOfMonth != -1){
    const updateMonth = months.splice(indexOfMonth,1);//if infinity plce of
    //of 1 the del all element of matching index
    console.log(months);
    console.log(updateMonth);
}else{
    console.log("dat is not matched");
}