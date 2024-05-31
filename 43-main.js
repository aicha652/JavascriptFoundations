//cards

let names= ['asmaa', 'khadija', 'aicha']
let ages = ['18yo', '20yo', '22yo']
function element(name, ageOfPrson) {
    //create elements
    let card = document.createElement('div')
    let head = document.createElement('h1')
    let age = document.createElement('p')
    let img = document.createElement('img')

    //add content
    let title = document.createTextNode(name)
    let ageContent =  document.createTextNode(ageOfPrson)
    img.src ='images/download.jpg'

    //add css to image
    img.style.width = '150px'


    head.appendChild(title)
    age.appendChild(ageContent)

    //add element in the desired place

    card.appendChild(head)
    card.appendChild(age)
    card.appendChild(img)

    document.body.appendChild(card)

    //add css
    card.style.border = '1px solid'
    card.style.width = '200px'
    card.style.padding = '10px'
    card.style.textAlign = 'center'
    card.style.margin = '10px'
    card.style.display = 'inline-block'

    console.log(card)
}
for (let i = 0; i < 3; i++) {
    element(names[i], ages[i])
}