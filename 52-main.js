//BOM: Browser Object Model
//BOM: allow JavaScript to talk to the browser


//the window object is supported by all browsers. it represents the browser's window


//The scroll() method of the Element interface scrolls the element
//to a particular set of coordinates inside a given element.

let btn = document.getElementById('btn')

//The onscroll event occurs when an element's scrollbar is being scrolled.

window.onscroll = function() {
    if(scrollY >= 400) {
        btn.style.display = 'block'
    }
    else{
        btn.style.display = 'none'
    }
}

btn.onclick = function() {
    scroll({
        top: 0,
        behavior: "smooth"
    })
}