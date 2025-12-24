// syncronous programming
let a = prompt("how are you")
let b = prompt("what is your age")

// asynchoronous programming
console.log("start")
setTimeout(function(){
console.log("hello")
},2000)
console.log("end")

// callbacks
function loadscript(src,callback){
    let script = document.createElement('script')
    script.src = src
    script.onload = ()=>callback(hello)
    document.body.appendChild(script)
}

function hello(){
    alert("hello")
}
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js",hello)
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js",(hello)=>{  // another way to declare function
    alert("hello")
})

// error handling on callbacks
function loadscript(src,callback){
    let script = document.createElement('script')
    script.src = src
    script.onload = ()=>callback(null,src)
    script.onerror =()=>callback(new Error("src got some error"))
    document.body.appendChild(script)
}

function hello(error,src){
    if(error){
        console.log(error)
        return
    }
    else{
    alert("hello"+src)
    }
}
loadscript("https://cdn.jsdehnhlivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js",hello)

// loadscript with promises ( callback hell/pyramid of doom )
function loadscript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = src
        script.onload = () => {resolve("script is successfully loaded")}
        script.onerror = () => {reject("some error occured")}
        document.body.appendChild(script)
    })
}

let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js")
p1.then((value)=>{
    console.log(value)
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js") // these is called callback inside callback
}).then((value)=>{
    console.log("second script successfull loaded")
})
.catch((error)=>{
    console.log(error)
})