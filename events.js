let click = document.getElementsByTagName("button")[0]

click.onclick = ()=>{
    alert("warning")
}
click.onmouseenter = ()=>{
    alert("warning")
}

// addeventlistner 

let x = function(e) {
    console.log(e.type)
    console.log(e.currentTarget)
    console.log(e.clientX , e.clientY)

    alert("not this work")
}
let y = function() {
    alert("not this work1")
}

let button = document.getElementById("btn")
button.addEventListener('click',x)
button.addEventListener('click',y)

//// removeeventlistner
button.removeEventListener('click', function() {  // not this work because passes the reference of object in handler.
    alert("not this work")
})   

button.removeEventListener('click',x)   // this is work 