// create a promise 
let p1 = new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        //console.log("i am a promise and i am resolved.")
        resolve(true)
    },5000)
})

let p2 = new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        //console.log("i am a promise and i am rejected.")
        reject(new Error("i am an error"))
    },5000)
})

// final result of promise

// promise is resolved then use
p1.then((value)=>{
    console.log(value)
})

// promise is rejected then use
p2.catch((error)=>{
    console.log(error)
})

// another way to catch the error
p2.catch((error)=>{
    console.log(error)
},(error)=>{
    console.log(error)
})

// promise chaining
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("i am a resolved")
        resolve(50)
    },3000)
})
p3.then((value)=>{
    console.log(value)
  
    return new Promise((resolve,reject)=>{    // custom promise
        setTimeout(()=>{
            resolve("i am finished")
        },3000)
    })
}).then((value)=>{
    console.log(value)
    return 2
}).then((value)=>{
    console.log(value)
})

// multiple handlers in promise
let p4 = new Promise((resolve,reject)=>{
    resolve(4)
})
// multiple handlers
p4.then(()=>{
    console.log("congratulations promise is resolved.")
})
p4.then(()=>{
    alert("yes")
})