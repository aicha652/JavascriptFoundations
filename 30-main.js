//arguments

function calc( ...numbers ) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
    }
    console.log(sum);
}

calc(2, 3, 4, 5, 8)