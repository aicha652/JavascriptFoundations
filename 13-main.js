//push() method adds new items to the end of an array.

let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push('Kiwi')
console.log(fruits)  //["Banana", "Orange", "Apple", "Mango", "Kiwi"]



fruits.push('Lemon', 'strawberry')

console.log(fruits) //["Banana", "Orange", "Apple", "Mango", "Kiwi", "Lemon", "strawberry"]


//unshift() method adds new elements to the beginning of an array.

let names = ['ali', 'ahmed', 'omar']

names.unshift('mohamed')

console.log(names)   //['mohamed', 'ali', 'ahmed', 'omar']

names.unshift('aboubakr', 'zaid', 'othmane')

console.log(names)  //['aboubakr', 'zaid', 'othmane', 'mohamed', 'ali', 'ahmed', 'omar']

//shift() method removes the first item of an array.

names.shift()

console.log(names)  //['zaid', 'othmane', 'mohamed', 'ali', 'ahmed', 'omar']

//pop() method removes (pops) the last element of an array

names.pop()

console.log(names)  //['zaid', 'othmane', 'mohamed', 'ali', 'ahmed']