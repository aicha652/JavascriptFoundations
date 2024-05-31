//events

let btn = document.getElementById('btn')

//example 1: element.onevent = function
//onclick event occurs when the user clicks on an HTML element.

btn.onclick =  () => {
    document.body.style.background = 'red'
}

//exemple 2: element.addEventListener('', function)
//addEventListener(): method attaches an event handler to a document.

btn.addEventListener('click', function() {
    console.log('clicked')
})