//events in javascript

//onclick: event occurs when the user clicks on an HTML element
//---------------------------------------Mouse Event---------------------------------------------------//
//onmouseup: event occurs when a mouse button is released over an element

let button = document.getElementById('btn')

button.onmousemove = function() {
    console.log('clicked')
}

//onmousedown: event occurs when a user presses a mouse button over an HTML element

//onmouseover: event occurs when the mouse pointer enters an element

//onmouseout: event occurs when the mouse pointer moves out of an element.

//onmousemove: event occurs when the pointer moves over an element

//-----------------------------------------------Keyboard Events---------------------------------------//

//onkeyup: event occurs when the user releases a key on the keyboard

let input = document.getElementById('inp')

input.onkeydown = function() {
    console.log('clicked')
}

//onkeydown: event occurs when the user presses a key on the keyboard


//------------------------------------------Focus Based Events---------------------------------------------//

//onfocus: event occurs when an element gets focus

input.onfocus = function() {
    this.style.backgroundColor = '#F00';
}

//onblur: event occurs when an HTML element loses focus

input.onblur = function() {
    input.style.backgroundColor = 'white';
}

//--------------------------------------------------Window Events----------------------------------//

//onload: event occurs when an object has been loaded

window.onload = function() {
    document.body.style.backgroundColor = 'black'
}