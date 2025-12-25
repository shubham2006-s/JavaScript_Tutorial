
let sub = document.getElementById("submit")

let key = document.getElementById("title")
let value = document.getElementById("val")

sub.addEventListener('click',(e)=>{
    e.preventDefault()
    let k = key.value
    let v = value.value
    localStorage.setItem(k,v)
    //localStorage.setItem("todo",JSON.stringify([key,value]))
    console.log(e)
    key.value = ""
    value.value = ""
})

let del = document.getElementById("delete")
del.addEventListener('click',(e)=>{
    localStorage.removeItem(key.value)
})  