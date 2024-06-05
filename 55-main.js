//------------------------------------SetTimeOut()------------------------------
//setTimeout() method calls a function after a number of milliseconds.
//1 second = 1000 milliseconds

//setTimeout() is executed only once.

setTimeout(function(){
    console.log('hello')
}, 3000)

//the function above is executed after 3 seconds

//------------------------------clearTimeout()--------------------------------------

//clearTimeout() method to prevent the function from starting.
let hello = setTimeout(function(){
    console.log('Stop the function')
}, 3000)

clearTimeout(hello)


//--------------------------------setInterval()-----------------------------------------
//setInterval() method calls a function at specified intervals (in milliseconds)

let i = 0
let x = setInterval(function() {
    console.log('i')
}, 4000)


//------------------------------------clearInterval()-------------------------------------
//you can to stop the execution by calling clearInterval()

clearInterval(x)



//Exapmle of the function being executed and after the condition it will be stoped

let j = 0
let y = setInterval(function() {
    console.log(j++)
    if (j == 4)
        {
            clearInterval(y)
        }
}, 1000)