let user1 = {
    name:'ali',
    getName:function() {
        return `hello ${this.name}`
    }
}

let user2 = Object.create(user1);

console.log(user2.name)

console.log(user2.getName())