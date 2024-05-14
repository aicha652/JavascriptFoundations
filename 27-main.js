//function

function hello(name) {
    console.log('hello ' +name);
}
hello('othmane');

function pro(price, taxes, ads) {
    let product = price + taxes;
    let result = product + ads;
    console.log(result);
}

pro(12, 30, 26);

function days(age) {
    let result = age * 365
    return result
}

let x = days(23)
console.log(x)