var area = "circle";

var PI = 3.142; l = 4; b = 5; r = 3;

switch(area){
    case "circle":
        console.log("The area of the circle : "+PI*r**2);
    break;
    case "triangle":
        console.log("The area of the triangle : "+ (l*b)/2);
    break;
    case "rectangel":
        console.log("The area of the rectangle : "+(l*b));
    break;
    default:
        console.log("Please enter the valitd data");
    break;
}