//before after inside

let before = document.getElementById('before')
let after = document.getElementById('after')
let inside = document.getElementById('inside')

let content = document.getElementById('content')
let container = document.getElementById('container')

content.style.margin = '10px'

container.style.border = '2px solid none'
container.style.height = '70px'
container.style.background = 'yellow'
container.style.margin = '10px'

inside.addEventListener('click', function() {
    container.appendChild(content)
})

before.addEventListener('click', function() {
    container.before(content)
})

after.addEventListener('click', function() {
    container.after(content)
})