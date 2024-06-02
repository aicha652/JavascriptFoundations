let text = document.getElementById('txt')
let btn = document.getElementById('btn')


window.onload = function () {
    text.focus(); //to focus on input after the window is reloaded
    btn.click();    //click on button after the window is reloaded
    text.value = 'test' //after reloading the window the input take this value test
    text.placeholder = 'test' //after the window is reloaded the placeholder changes it's value
}

//method removes focus from an element.
text.oncontextmenu = function() {
    text.blur();
}

btn.onclick = () => {
     btn.style.background="#ffa"
}