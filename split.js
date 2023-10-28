var text = "a,b,c,d,e,f,g,h,i,j,k,l";
var text1 = "a,b,c, d,e,f,  g,h,i, j,k,l";
var text2 = "a,b,c,d,|e,f,g,h,i,|j,k,l";
console.log(text.split(","));// convert on comma
console.log(text1.split(" "));// convert on spaces
console.log(text2.split("|"));//convert on pipe