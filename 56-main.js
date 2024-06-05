//------------------------------------------localStorage--------------------------------------------
//localStorage object allows you to save key/value pairs in the browser
//The localStorage object stores data with no expiration date
//The data is not deleted when the browser is closed, and are available for future sessions


//--------------------------------------------add data-----------------------------------------------
localStorage.setItem('name', 'aicha') // == localStorage.name = 'aicha'

//---------------------------------------------read data----------------------------------------------
console.log(localStorage.getItem('name'))  // == console.log(localStorage.name)

//if the datatype of a value isn't a string we use JSON.stringify()

localStorage.setItem('age', JSON.stringify(25))
localStorage.setItem('skills', JSON.stringify([1, 2, 3]))
localStorage.user = JSON.stringify({
    name: 'aicha',
    age : '10'
})

console.log(typeof localStorage.skills)   //string

//if you want to get the real type should use JSON.parse

console.log(typeof JSON.parse(localStorage.age)) //number

//to get the first element in local storage

//Key    Value
//skills	[1,2,3]	
//user	{"name":"aicha","age":"10"}	
//age	25	
//name	aicha

console.log(localStorage.key(0))   //skills
console.log(localStorage.key(2))   //age

//--------------------------------------------remove data---------------------------------------
localStorage.removeItem('user')

//to remove all data in local storage we use clear

//localStorage.clear()



//--------------------------------------------sessionStorage--------------------------------------------
//sessionStorage object let you store key/value pairs in the browser.
//sessionStorage object stores data for only one session.


//-----------------------------Example of local storage---------------------------
let text = document.getElementById('txt')

if(localStorage.length > 0) {
    text.value = localStorage.getItem('text')
}

text.onkeyup = function() {
    localStorage.setItem('text', text.value)
}