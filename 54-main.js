//-------------------------------------------Location Object----------------------------------------

//https://www.instagram.com/abdelrahman_noufal/

//https  ==protocol
//www.instagram.com  == host name
//abdelrahman_noufal == path name

//window.location object can be written without the window prefix

//window.location.href: returns the href (URL) of the current page
console.log(location.href)

//window.location.protocol returns the web protocol used (http: or https:)
console.log(location.protocol)

//window.location.hostname returns the domain name of the web host
console.log(location.hostname)


//window.location.pathname returns the path and filename of the current page
console.log(location.pathname)

//location.reload(): method reloads the current document


//location.assign(): loads a new document
//The assign() method of the Location interface causes the window to
//load and display the document at the URL specified. After the navigation 
//occurs, the user can navigate back to the page that called Location.assign() by pressing the "back" button

location.assign()

//location.replace() method replaces the current document with a new one.
location.replace("https://www.w3schools.com");

//The difference between assign() and replace():

//replace() removes the current URL from the document history.

//With replace() it is not possible to use "back" to navigate back to the original document.

//----------------------------------------------------Window History------------------------------------------------
//history.back() - same as clicking back in the browser

console.log(history.back())

//history.forward() - same as clicking forward in the browser

console.log(history.forward())