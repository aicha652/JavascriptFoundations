//Sibling

//Siblings are nodes with the same parent (in the same childNodes list)

//Siblings are "brothers" and "sisters".

let element = document.getElementById('second')

console.log(element) //<p id="second">second</p>


//previousElementSibling property returns the previous element in the same tree level

console.log(element.previousElementSibling)  //<p>first</p>


//nextElementSibling property returns the next element in the same tree level

console.log(element.nextElementSibling)      //<p>third</p>

//----------------------------------------------------------------------------


//we can change th next element by using innerHtml
element.nextElementSibling.innerHTML = 'test'

console.log(element.nextElementSibling)      //<p>test</p>

//we can remove the next element by using remove()

//element.nextElementSibling.remove()
//console.log(element.previousElementSibling)   //<p>first</p>
//console.log(element.nextElementSibling)       //null


//previousSibling returns the previous sibling node: An element node, a text node, or a comment node
console.log(element.previousSibling)         //"hello"


//parent

//The parentElement property returns the parent element of the specified element

console.log(element.parentElement)           //<div>
                                             //    <p>first</p>
                                             //    <!-- comment -->
                                             //    hello
                                             //    <p id="second">second</p>
                                             //    <p>third</p>
                                             //</div>


//we can use remove() to delete all elements
element.parentElement.remove()
