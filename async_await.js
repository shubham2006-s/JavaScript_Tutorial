async function shubham() {
    let surat = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("31 celsius")
        },2000)
    })
    let ahmedabad = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("38 celsius")
        },5000)
    })
    console.log("fetching surat weather...")
    let s = await surat  // await is used to wait the promise fullfilled
    console.log("fetched surat weather "+s)
    console.log("fetching ahmedabad weather...")
    let a = await ahmedabad
    console.log("fetched ahmedabad weather "+a)
    return [s,a]
}

const h1 = async() =>{
    console.log("i am h1")
}
async function n1() {
    
    let a =  await shubham()
    let b = await h1()
    //a.then((value)=>{
    //    console.log(value)
    //})
}
n1()