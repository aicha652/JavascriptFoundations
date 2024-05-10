//indexOf()
//lastIndexOf()
//include()
//startsWith()

//the difference between indexof(), lastIndexOf() includes():  indexOf() starts from left
//---------------------------------------------------------:  lastIndexOf() strats from right
//---------------------------------------------------------:  include() return true if a string contains a specified string

//includes() method returns true if a string contains a specified string.

let text = 'i love java script'

console.log(text.indexOf('a', 9)) //10
console.log(text.lastIndexOf('i')) //15
console.log(text.includes('a'))    //true
console.log(text.includes('y'))    //false
console.log(text.includes('script')) //true
console.log(text.includes('o', 4))   //false


//startsWith() method returns true if a string starts with a specified string

console.log(text.startsWith('i')) //true
console.log(text.startsWith('l', 2)) //true
console.log(text.startsWith('z', 2)) //false


//endsWith() method returns true if a string ends with a specified string

console.log(text.endsWith('t'))  //true
console.log(text.endsWith('e' , 6)) //true
console.log(text.endsWith('s', 13))  //true
console.log(text.endsWith('z', 1))  //false