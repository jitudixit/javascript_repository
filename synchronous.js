const fun2 = () => {
    console.log(`Function 2 is called`);
}
const fun1 = () => {
    console.log(`function 1 is called`);
    fun2();
    console.log(`function 1 is called again`);
}

fun1();