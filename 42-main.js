//create elements by javascript
//step 1: create elements

let container = document.createElement('div')
let head = document.createElement('h1')
let img = document.createElement('img')

//step 2: add content

let content = document.createTextNode('hello world')
head.appendChild(content)

img.src = 'images/download.jpg'
//add css to image
img.style.width = '300px'


//step 3: add element in the dsired place
container.appendChild(head)
container.appendChild(img)

//console.log(container)   //<div>
                         //     <h1>hello world</h1>
                         //     <img src="images/download.jpg">
                         //</div>

document.body.appendChild(container)

console.log(container)

container.style.background = '#666'
container.style.color = '#fff'
container.style.padding = '10px'
container.style.textAlign = 'center'