//if conditional

let age = prompt('enter your age')

//if (age >= 18) {
    //document.write('hello user')
//}
//else {
    //document.write('no you are very young')
//}

//the code above is equal to the under

//age >= 18?
    //document.write('hello user')
    //:document.write('no you are very young')

//--------------------------------------------------------------------------------------------------//
//age > 18?
    //document.write('hello user')
    //:age == 18?
         //document.write('your age is now 18')
    //:document.write('you are young')

let result = age > 18? 'hello user' :age == 18? 'your age is now 18':'you are young'

console.log(result)