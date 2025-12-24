var a=10
var a="kavy" // this is valid

let b=11
//let b="krisha"  // cannot re-declare 

var c=12
var d=13

const author="shubham"  // cannot be changed and re-declare
//author=10  // throws an error.
//let author =10  // throws an error
{
    var a="shubham"  // var is not used because var is globally scoped.
    console.log(a)
}
console.log(a)
{
    let b="dharmik"  // let is block scoped it is used.
    console.log(b)
}
console.log(b)
