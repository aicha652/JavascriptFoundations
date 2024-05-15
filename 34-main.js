//this

//this keyword refers to an object.

let user = {
    name: 'ahmed',
    getName: function() {
        return this.name
    }
}

console.log(user.getName()) //ahmed