//hoisting


//Hoisting is JavaScript's default behavior of moving all declarations to the top of
//the current scope (to the top of the current script or the current function)


//function declaration
function hello() {
    return 1;
}

//function expression
let hello = function() {
    return 1;
}

//the 2 functions above are the same

//--------------------------------------------------------------------------------------

console.log(x)

var x = 10;

//the code above is read by javascript like this

var x;

console.log(x)   //undefined

x = 10

//Using a let variable before it is declared will result in a ReferenceError

//-----------------------------------------------------------------------------------------

console.log(hello())    //this will be return 1
function hello() {
    return 1
}

//the code above is read by javascript like this

function hello() {
    return 1
}
console.log(hello())