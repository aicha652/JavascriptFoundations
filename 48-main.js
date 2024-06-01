//add remove and toggle class

let hello = document.getElementById('hello')

hello.onclick = () => {
    hello.classList.add("name")
}

//--------------------------------Mouse Events-------------------------------------//

//oncontextmenu: event occurs when the user right-clicks an HTML element to open the context menu
//oncontextmenu:	The user right-clicks on an element

hello.oncontextmenu = function() {
    hello.classList.remove("name")
}

//instead of using add and remove we can use toggle 

hello.onclick = function() {
    hello.classList.toggle("name")
}