//attribute
//<element attribute>text</element>


//get attributes like src, alt, id...
let image = document.getElementById('img')
console.log(image) //<img class="test" id="img" src="images/download.jpg" alt="flower">

console.log(image.src)  //file:///C:/Users/dell/Documents/GitHub/JavascriptFoundations/images/download.jpg

console.log(image.alt)  //flower

console.log(image.id)   //img

console.log(image.className)//test

//set attribute

image.className="flowerClass"
image.id ="image"

console.log(image.className)  //flowerClass
console.log(image.id)         //image

//add another attribute if this attribute exists it will be setif not it will be create
image.title="testTitle"
console.log(image.title) //testTitle


//hasAttributes()

console.log(image.hasAttributes())   //true

//hasAttribute('attribute')

console.log(image.hasAttribute('alt'))  //true

console.log(image.hasAttribute('title')) //true

console.log(image.hasAttribute('style'))  //false

//attributes[index]

console.log(image.attributes[0])  //class="flowerClass"

console.log(image.attributes[2])  //src="images/download.jpg"

//setAttribute()

image.setAttribute('alt', 'picture')

console.log(image.alt)  //picture


//removeAttribute(): to remove an attribue

image.removeAttribute('alt')  //remove alt attribute

console.log(image)