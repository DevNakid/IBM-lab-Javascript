let width;
let length;

//declare calculale area function
function calculateArea(){
    width = parseFloat(document.getElementById("width").value);
    length = parseFloat(document.getElementById("length").value);
    let area = width * length;
    document.getElementById("result").innerText = `The area of the rectangle is: ${area}`;
}

greeting();
function greeting(){
    console.log("it's work");
}
calc();
const calc = function(){
    console.log("error");
}