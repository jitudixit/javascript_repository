function biodata(){
    let myFirstname = "jitendra";
    console.log(myFirstname);
    if(true){
        let myLastname = "dixit";
        console.log("inner "+myLastname);
        console.log("inner "+myFirstname);
    }
    console.log("inner outer "+myFirstname);
    // console.log("inner outer "+myLastname);
}
// console.log(myFirstname);
biodata();