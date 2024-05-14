//object


// object has a property and a method
car = {
    title: 'BMW', //title is a property
    price: 50000,
    color: ['white', 'red', 'black'],
    model: 2020,
    hello: function() {  //hello is a method
        return 'hello'
    }
}

console.log(typeof car) //object

console.log(car.color)  //['white', 'red', 'black']

console.log(car.hello())//hello