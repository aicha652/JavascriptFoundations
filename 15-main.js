//search in array

//indexOf()

let names = ['ahmed', 'ali', 'mohamed']

console.log(names.indexOf('ahmed'))   //0

console.log(names.indexOf('zaid'))    //-1

names = ['ahmed', 'ali', 'mohamed', 'ahmed']

console.log(names.indexOf('ahmed', 1))  //3

//lastIndexOf()

names = ['ahmed', 'ali', 'mohamed', 'ahmed']

console.log(names.lastIndexOf('ahmed'))     //3
console.log(names.lastIndexOf('ahmed', -2)) //0
console.log(names.lastIndexOf('ahmed', 2))  //0


//includes

names = ['ahmed', 'ali', 'mohamed', 'ahmed', 'zaid', 'omar']

console.log(names.includes('omar'))  //true

console.log(names.includes('ali', 2)) //false

console.log(names.includes('ali'))    //true