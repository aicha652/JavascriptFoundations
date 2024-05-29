//Object.assign(): method is used to copy the values and properties from one or more source objects to a target

//Object.assign(target, ...sources);

let a1 = {
    num1:1,
    hello:function(){
        return 'hello'
    }
}

let a2 = {
    num2:2
}

let a3 = {
    num3:3
}

let a4 = Object.assign(a1, a2, a3, {
    num4:4
})

console.log(a4)  //{num1: 1, num2: 2, num3: 3, num4: 4, hello: ƒ}

a4.num1 = 20
a4.r = 30

console.log(a4) //{num1: 20, num2: 2, num3: 3, num4: 4, r: 30, hello: ƒ}