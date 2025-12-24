// primitive data types -7

let a=null
let b= 234
let c=true
let d=BigInt(562)
let e="shubham"
let f=Symbol("hi")
let g
console.log(a,b,c,d,e,f,g)
console.log(typeof c) // shown the type of c variable.

// non-primitive data types - object

const item = {
    n:"shubham",
    age:19
}
console.log(item["n"])  // double quote is fixed.
item["friend"]="dhruv"  // this is a possible.adds the key in object
item["n"]="shubh"   // change the value of keys are possible in object.

//item=15 this is not allowed
//item = {} this is not allowed
console.log(item)
