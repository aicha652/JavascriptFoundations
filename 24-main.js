//nested loop
let cars = ['BMW', 'Mercedes', 'Honda']
let models = [2020, 2021, 2022]
let colors = ['black', 'red', 'white']

for (let i = 0; i < cars.length; i++) {
    console.log("Cars: " + cars[i]);
    for (let j = 0; j < models.length; j++) {
        console.log("Model: " + models[j]);
    }
    for (let k = 0; k < colors.length; k++) {
        console.log(`color: ${colors[k]}`);
    }
    console.log(" ")
}