// local storage

let key = prompt("enter the key do you want")
let value = prompt("enter the value do you want")

localStorage.setItem(key,value) // set and update the data
console.log(`The key is ${key}  and its value ${localStorage.getItem(key)}`)

// clear the all data
localStorage.clear()

// reomove the data
localStorage.removeItem("hello")

// get the key on given position
localStorage.key(0)

// Find number of stored items in localstorage
console.log(localStorage.length)

// storage event

window.onstorage = (e)=>{
    alert("changed")
    console.log(e)
}
