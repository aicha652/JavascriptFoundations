//comparison 

//difference between == and ===

//== (compare values)
//=== (compare values and datatypes)

console.log(5 == '5')    //true because the values are same

console.log(5 === '5')   //false because the datatypes are different

let product = 'smartphone'
let size = '60'
let price = '12500'


// && and
console.log(price < 13000 && size ==60)  //true
console.log(price < 13000 && size ==40)  //false

//|| or
console.log(price < 13000 || size ==40)  //true
console.log(price < 13000 && size ==60)  //true
console.log(price < 10000 || size == 40) //false