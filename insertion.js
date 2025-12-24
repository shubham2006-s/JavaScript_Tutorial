// insertion method
let a = document.getElementsByTagName("div")[0]
a.innerHTML+="<h1>hello world</h1>"

let div = document.createElement("div")
div.innerHTML = "<h1>hello world</h1>"
a.appendChild(div)
a.append(div)
a.prepend(div)
a.before(div)
a.after(div)
a.replaceWith(div)

// insert adjacent HTML method
let i = document.getElementsByClassName("container")[0]
i.insertAdjacentHTML('beforebegin','<p>beforebegin</p>')
i.insertAdjacentHTML('afterbegin','<p>afterbegin</p>')
i.insertAdjacentHTML('beforeend','<p>beforeend</p>')
i.insertAdjacentHTML('afterend','<p>afterend</p>')
i.remove() // remove the nodes

// classname and classlist
let c = document.getElementById("container")
c.className = "blue dark-text" // changes the classname

c.classList.remove("dark-text")
c.classList.add("dark-text")
c.classList.toggle("blue")
c.classList.contains("blue")

// set timeout
let time= setTimeout(function(){
    alert("warning")
},2000)

clearTimeout(time)

// set time interval
const sum =(a,b)=>{
    console.log("the sum is ", a+b)
}
let timeid = setInterval(sum ,2000 , 10 , 10)
clearInterval(timeid)