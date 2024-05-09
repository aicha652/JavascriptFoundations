//Math
//abs(): function is a built-in JavaScript function that returns the absolute value of a number.

console.log(Math.abs(-7)) //7
console.log(Math.abs(5))  //5

//sqrt(): the square root of a number


//Math.sqrt(4) == √4
console.log(Math.sqrt(4)) //2
console.log(Math.sqrt(9)) //3
console.log(Math.sqrt(8)) //2.8284271247461903

//pow(): method returns the value of x to the power of y (xy).

console.log(Math.pow(2, 3))  //8
console.log(Math.pow(3, 3));  //27
console.log(3**3)             //27

//round():  method rounds a number to the nearest integer

console.log(Math.round(2.5)) //3
console.log(Math.round(2.4)) //2


//ceil(): method rounds a number rounded UP to the nearest integer

console.log(Math.ceil(5.1)) //6
console.log(Math.ceil(9.9)) //10


//floor(): method rounds a number DOWN to the nearest integer

console.log(Math.floor(6.9)) //6
console.log(Math.floor(4.2)) //4


//min(): method returns the number with the lowest value

console.log(Math.min(3, 4, 6, 7, 8, 9, 1))   //1
console.log(Math.min(3, 4, 6, 7, 8, 9, 1, -4))  //-4

//max():  returns the number with the highest value
console.log(Math.max(3, 4, 16, 7, 8, 9, 10))   //16
console.log(Math.max(3, 4, 6, 7, 8, 9, 1, -4))  //9