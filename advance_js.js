// distructuring

let arr = [1,2,3,4,5]
let [a,b,d,...rest1] = arr
console.log(a,b,d,rest1)  // rest will be create array 
let [x,,y,...rest2] = arr
console.log(a,b,rest2)  // rest will be create array 

let obj = {a:1 , b:5}
let {p,q} = obj
console.log(a,b)

// spread operator
let arr1 = [ 1 , 5 , 7]
let obj1 = {...arr1} // convert array to object
console.log(obj1)

function sum(a,b,c){
    return a+b+c
}
console.log(sum(...arr1))

const a1 ="the", b1 ="no"
const c1 = {a1,b1}
console.log(c1)

let obj2 = {
    name:"shubham",
    age:18,
    company:"pixer"
}
console.log({...obj2,name:"kavya"}) // change the object value
console.log({name:"kavya",...obj2}) //not change the object value

 //  local,global and function scope

let p1 = 10 // global scope
function a(){  // function and block scope / local scope
    let b =2
}


// hosting
sum()
console.log(b)
a()
function a(){
    console.log("hi")
}
var b11=10;  // this is print undefined
let b2=10;  // throws an error let or const
const sum = () =>{ //  cannot hosting function expression.
    console.log("hello")
}


// closure

function returnfunc(){
    const x = ()=>{
        let a =1
        console.log(a)
        const y = ()=>{
            //let a =1
            console.log(a)
            const z = ()=>{
                //let a =1
                console.log(a)
            }
            z()
        }
        a=999 // set the value of a for y and z functions.
        y()
    }
    return x
}

let c = returnfunc()
c()