

// attributes
// 1. getattribute
let first = document.getElementById("first")
console.log(first.getAttribute("id"))
console.log(first.getAttribute("class"))

// 2. hasattribute
console.log(first.hasAttribute("class")) // true
console.log(first.hasAttribute("box")) // false

// 3. setattribute
console.log(first.setAttribute("class","hello"))

// 4. removeattribute
console.log(first.removeAttribute("class"))

// 5. attributes
console.log(first.attributes)

// dir
console.dir(document)
console.log(document)

//tagname/nodename
//document.body.firstChild.nodeName  // nodename
//document.body.firstElementChild.nodeName // tagname

// innerHTML
//first.innerHTML  // update the elements
//first.innerHTML = " hii, i am a inner " // set the elements

// outerHTML
//first.outerHTML // update the elements
//first.outerHTML = "<span> how are you </span> // set the elements

// text content
console.log(document.body.textContent)

// hidden property
first.hidden = false

// dataset attribute
console.log(first.dataset)

