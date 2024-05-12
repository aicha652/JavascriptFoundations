//continue 
//break

let names = ['ahmed', 'ali', 'zaid', 1, 'omar', 2, 3, 'othmane', 4]

for (let i = 0; i < names.length; i++) {
    if (typeof names[i]  == "number") {
        continue;
    }
    console.log(names[i]);
}

console.log('-------------------------------------------------------------')

names = ['ahmed', 'ali', 'zaid', 'omar', 'othmane']

for (let i = 0; i < names.length; i++) {
    if (names[i] == "zaid") {
        continue;
    }
    console.log(names[i])
}

console.log('-------------------------------------------------------------')

for (let i = 0; i <names.length; i++) {
    if (names[i] == 'omar') {
        break;
    }
    console.log(names[i]);
}