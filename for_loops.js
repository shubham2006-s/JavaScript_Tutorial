let n = [1,2,3,4,5]

//// for each loops
n.forEach((elements) =>{
    console.log(elements)
})

//// for of loops
for(let i of n){
    console.log(i)
}

// for in loops
for(let item in n){
    //console.log(item)  prints the arrays keys.
    console.log(n[item])
}

// array from loops
let a="shubham"
let result=Array.from(a)
console.log(result)

// arrays map methods
let arr = [1,2,3,4,5]
arr.map((value,index,array)=>{  // creates a new array by performing some operation on each array elements.cannot modify this array
    console.log(value,index,array)
})

// arrays filter method
let arr1 = [11,2,13,44,55,8,45]
const greater = (a)=>{
    return a<10
}
let output = arr1.filter(greater)  // this method is creates new array
console.log(output)

// arrays reduce method
let arr2 = [1,2,3,4,5]
let sum=arr2.reduce((a,b)=>{ // return the value 
    return a+b
})
console.log(sum)