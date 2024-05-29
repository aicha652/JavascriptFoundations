//inner and outer


let container = document.getElementById('container')

console.log(container)  //<div id="container>...</div>


//outerHTML:  property sets or returns the HTML element, including attributes, start tag, and end tag

console.log(container.outerHTML)   //<div id="container">
                                   //            <h3>Hello World</h3>
                                   //        </div>


//innererHTML: innerHTML property sets or returns the HTML content (inner HTML) of an element

console.log(container.innerHTML)   //<h3>Hello World</h3>

//container.outerHTML = "<p>hello</p>"  //set the div tag and h3 to p tag

//<div id="container">               ----|
//            <h3>Hello World</h3>       |------------->   //<p>hello</p>
//</div>                             ----|

container.innerHTML = "<p>hello</p>"   //set the content of div tag to p tage

//<div id="container">               ----|                 //<div id="container">
//            <h3>Hello World</h3>       |------------->   //            <p>hello</p>
//</div>                             ----|                 //</div> 


//innerText: innerText property sets or returns the text content of an element.

//we can use innerText or textContent

container.innerText = "<p>hello</p>"


//outerText: property sets or returns the text content of the specified node.

container.outerText = "<p>hello</p>"
