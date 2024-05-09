//convert strings to numbers
//to convert a string to number we can add + in fromt of string
console.log(+'5'); //5
console.log(+'ahmed'); //NaN (Not a number) the type of (NaN) is number
console.log(+true)  // 1
console.log(+false) //0
console.log(+undefined) //NaN
console.log(+null) //0

// there are other ways to convert number to float: +, Number(), parseInt(), parseFloat()

//The parseInt method parses a value as a string and returns the first integer.


console.log(+'4');            //4
console.log(Number('4'));     //4
console.log(parseInt('4.5'))  //4
console.log(parseInt("40 years")) //40
console.log(parseInt("He was 40")) //NaN
console.log(parseInt("34 45 66")) //34

console.log(parseFloat('4.5'))//4.5


//isInteger() checks for some values if they are integers or not using the Number.isInteger() method in JavaScript

console.log(Number.isInteger(4))   //true
console.log(Number.isInteger('4')) //false
console.log(Number.isInteger(-2))  //true
console.log(Number.isInteger(0))   //true
