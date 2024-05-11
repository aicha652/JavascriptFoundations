//concat and join array

let arr1 = ['ahmed', 'mohamed', 'ali']
let arr2 = ['omar', 'othmane', 'zaid']

//concat() method concatenates (joins) two or more arrays.

console.log(arr1.concat(arr2))  //['ahmed', 'mohamed', 'ali', 'omar', 'othmane', 'zaid']

console.log(arr1.concat(arr2, 'khalid'))  //['ahmed', 'mohamed', 'ali', 'omar', 'othmane', 'zaid', 'khalid']

//join() method returns an array as a string.

arr1 = ['ahmed', 'mohamed', 'ali']

console.log(arr1.join())    //ahmed,mohamed,ali
console.log(arr1.join('-')) //ahmed-mohamed-ali
console.log(arr1.join(' # ')) //ahmed # mohamed # ali