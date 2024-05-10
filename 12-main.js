//Datatypes: array

let names = ['ahmed', 'ali', 'mohamed', 'alya']

console.log(names) //['ahmed', 'ali', 'mohamed', 'alya']

console.log(names.length) //4

console.log(names[2])    //mohamed

//we can change the name of index 2
names[2] = 'zaid'

console.log(names)   //['ahmed', 'ali', 'zaid', 'alya']



let array_of_types = [1, 2, 3, 'ahmed', true, undefined, null, false]

console.log(array_of_types) //[1, 2, 3, 'ahmed', true, undefined, null, false]


//nested array

let objects = [1, 2, 3, [4, 5, 6, [7, 8, 9]], 10]

console.log(objects[3][3][1])   //8