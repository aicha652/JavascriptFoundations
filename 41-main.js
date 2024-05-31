//Dom css style

let container = document.getElementById('container')

console.log(container)   //<div id="container"></div>

container.innerText='hello world'

//element.style.property = value   || method 1

container.style.backgroundColor = '#444'
container.style.color = '#fa0'
container.style.padding = '10px'
container.style.borderLeft ='4px solid #fa0'

//we can remove any property you want

container.style.removeProperty('color')

//method 2
container.style.setProperty('color', 'red')


//element.style.cssText   || method 3
container.style.cssText = `
background: #444;
color: white
`