//repeat
//length
//access
//search
//slice
//split

// repeat method returns a string with a number of copies of a string

let name = "ali "

console.log(name.repeat(5))  //ali ali ali ali ali 


//length property returns the length of a string

let Name = 'ahmed  '

console.log(Name.length) //7

//charAt() method returns the character at a specified index (position) in a string

console.log(Name.charAt(3)) //e

//indexOf() method returns the position of the first occurrence of a value in a string

console.log(Name.indexOf('m'))  //2

let text = 'i love javascript'

console.log(text.indexOf('javascript')) //7

console.log(text.indexOf('a'))  //8

console.log(text.indexOf('a', 9)) //10


//lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string

console.log(text.lastIndexOf('l'))  //2
console.log(text.lastIndexOf('i'))  //14
console.log(text.lastIndexOf('i', 13))  //0


//slice() method extracts a part of a string
let text1 = 'Hello world'
console.log(text1.slice(0)) //Hello world
console.log(text1.slice(5)) // world
console.log(text1.slice(3)) //lo world
console.log(text1.slice(3, 8)) //lo wo --- 8 index isnot include

//split() method splits a string into an array of substrings.

let names = "ali ahmed hassan zaid"

console.log(names.split(' '));   // ['ali', 'ahmed', 'hassan', 'zaid']

let boy_names = "ali_ahmed_hassan_zaid";
console.log(boy_names.split(' '))  //['ali_ahmed_hassan_zaid']
console.log(boy_names.split('_'))   //['ali', 'ahmed', 'hassan', 'zaid']
console.log(boy_names.split('_', 2)) // ['ali', 'ahmed']
console.log(boy_names.split('h')) //['ali_a', 'med_', 'assan_zaid']
console.log(boy_names.split('a')) // ['', 'li_', 'hmed_h', 'ss', 'n_z', 'id']
console.log(boy_names.split('')) //['a', 'l', 'i', '_', 'a', 'h', 'm', 'e', 'd', '_', 'h', 'a', 's', 's', 'a', 'n', '_', 'z', 'a', 'i', 'd']