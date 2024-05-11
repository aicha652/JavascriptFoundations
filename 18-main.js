//comparison

let x = 'ahmed'
let y = 'ali'

console.log(x == y)   //false

y = 'ahmed'

console.log(x == y)   //true

let z = 'zaid'

x = z
console.log(x)        //zaid

let inputEmail = prompt('Enter your email')
let email = 'mail@gmail.com'

//trim() method removes whitespace from both sides of a string.

console.log(inputEmail.trim().toLowerCase() == email)


//toUpperCase() method converts a string to uppercase letters.

let fruit = 'lemon'
console.log(fruit.toUpperCase())   //LEMON

let name = 'ALI'
console.log(name.toLowerCase())    //ali

//toLowerCase() method converts a string to lowercase letters.