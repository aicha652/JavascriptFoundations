//slice()
//substring()
//substr()

//slice() method extracts a part of a string  

//substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

//string.substr(start, length): begins at a specified position, and returns a specified number of characters.

//The difference between slice and substring and substr : for slice we can extracts a part of a string using positive and negative index
//------------------------------------------------------: for substring we can extracts a part of string using only positive index
//------------------------------------------------------: for substr we can extracts a part of string using index and length (the specified number of characters)

let name = "i love java script"

console.log(name.slice(2, 6))   //love
console.log(name.slice(-1))     //t
console.log(name.slice(-7))     // script
console.log(name.slice(-8))     //a script
console.log(name.slice(-11, -7))//java

console.log(name.substring(2, 6))  //love


console.log(name.substr(2, 6))    //love j
console.log(name.substr(-9, 7)) //va scri


