//splice() method adds and/or removes array elements.
//splice(start, count, add)


//here to remove elements
let names = ['ali', 'ahmed', 'gamal']

names.splice(0, 1)
console.log(names)  //['ahmed', 'gamal']

names.splice(1, 1)
console.log(names)  //['ahmed']

names = ['ali', 'ahmed', 'gamal', 'fatima']

names.splice(1, 2) 
console.log(names)  //['ali', 'fatima']

names = ['ali', 'ahmed', 'gamal', 'fatima', 'mohamed', 'zaid']

names.splice(2, 3)
console.log(names)   //['ali', 'ahmed', 'zaid']


//here to add elements

names = ['ali', 'ahmed', 'gamal']

names.splice(0, 0, 'khadija')
console.log(names)   //['khadija', 'ali', 'ahmed', 'gamal']

names = ['ali', 'ahmed', 'gamal', 'zaid']

names.splice(0, 1, 'othmane')
console.log(names)  //['othmane', 'ahmed', 'gamal', 'zaid']


names = ['ali', 'ahmed', 'gamal', 'zaid']

names.splice(2, 2, 'omar')
console.log(names)  // ['ali', 'ahmed', 'omar']


//slice(start, end)
names = ['ali', 'ahmed', 'gamal', 'fatima']

console.log(names.slice(1, 4))  //['ahmed', 'gamal', 'fatima']


console.log(names.slice(-3, -1)) //['ahmed', 'gamal']