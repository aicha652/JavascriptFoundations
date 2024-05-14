//Nested object

let user = {
    firstName: 'ahmed',
    lastName: 'hamido',
    email: 'test@gmail.com',
    age: '24',
    skills: ['html', 'css', 'js', 'React', 'python'],
    active: true,
    phoneNumber: {
        first: '012345678',
        second: '987654321'
    },
    address: {
        morocco: 'casablanca',
        turkey:  'istanbul' 
    },
    //method
    isActive:function() {
        if(user.active === true){
            return 'hello user'
        }else{
            return 'sorry you are not active'
        }
    },
    getAge:function() {
        if(user.age >= 18) {
            return 'available'
        }
        else{
            return 'not available'
        }
    }
}


console.log(user)

console.log(user.firstName)  //ahmed

console.log(user['firstName'])  //ahmed

console.log(user['phoneNumber'])  //{first: '012345678', second: '987654321'}

console.log(user.phoneNumber.first)  //012345678

console.log(user['phoneNumber']['first']) //012345678

console.log(user.phoneNumber['second']) //987654321

console.log(user.isActive())  //hello user

console.log(user['getAge']()) //available