//arrow function

let x = () => {
    return 1
}
console.log(x());

//if we have arrow function with one line or one statement we can remove {} and return and the function it will be like this

let y = () => 1
console.log(x())

let z = (num) => num * 2 //equal to this let z = num => num * 2  we use this if we have one parameter
console.log(z(5))

let i =(num, x) => num * x
console.log(i(3, 6))