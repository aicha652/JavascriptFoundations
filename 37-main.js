//getElementById() method returns the elements that have given an ID which is passed to the function
//id is unique

let x = document.getElementById('head')

console.log(x) //<h1 id="head">Hello World</h1>

let y = document.getElementsByClassName('hello')
console.log(y) //[h1.hello, h1.hello, h1.hello, h1.hello]

//getElementsByClassName() method returns a collection of elements with a specified class name(s)
//className is not unique we can have elements with the same className

let z = document.getElementsByClassName('hello')[0]
z.style.color = 'red'


//getElementsByTagName() method returns a collection of all elements with a specified tag name

let a = document.getElementsByTagName('h1')
console.log(a)  //[h1#head, h1.hello, h1.hello, h1.hello, h1.hello]

a = document.getElementsByTagName('h1')[0]
console.log(a) //<h1 id="head">Hello World</h1>

a.style.color='green'

//querySelector() method returns the first element that matches a CSS selector.
let head = document.querySelector('h1')
head.style.color='yellow'

head = document.querySelector('#head')
head.style.color = 'blue'

head = document.querySelector('.hello')
head.style.color= 'purple'

//uerySelectorAll() method returns all elements that matches a CSS selector

head = document.querySelectorAll('h1')
console.log(head)    //[h1#head, h1.hello, h1.hello, h1.hello, h1.hello]

//To select the second element with tage h1 we use index[1]

head = document.querySelectorAll('h1')[1]
console.log(head)  //<h1 class="hello" style="color: purple">class1</h1>


//body property sets or returns a document's <body> element

let = body = document.body
console.log(body)   //<body>
                    //     <h1 id="head">Hello World</h1>
                    //     <h1 class="hello">class1</h1>
                    //     <h1 class="hello">class2</h1>
                    //     <h1 class="hello">class3</h1>
                    //     <h1 class="hello">class4</h1>
                    //     <script src="37-main.js"></script>
                    //</body>

body.style.background='#666'

//title property sets or returns the title of the document

let title = document.title

console.log(title) //test

title = 'change title'

console.log(title)

//images property returns a collection of all <img> elements in a document

let images = document.images
console.log(images)   //[img]

//get the first image using index 0
images = document.images[0]
console.log(images) //<img src="" alt="picture">

//get the src of the images with index 0
console.log(images.src) //file:///C:/Users/dell/Documents/GitHub/JavascriptFoundations/37-index.html

//get the alt
console.log(images.alt) //picture

images.alt='change alt'
console.log(images.alt) //change alt

//links property returns a collection of all links in the document

let links = document.links
console.log(links)  //[a]

//get the first link
links = document.links[0]
console.log(links)  //<a href="https://www.youtube.com">youtube</a>

console.log(links.href) //https://www.youtube.com/


//forms property returns a collection of all <form> elements in a document

let forms = document.forms
console.log(forms)   //[form]

//get the first form 
forms = document.forms[0]