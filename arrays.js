let marks=[89,58,85,75,"hello",null,false]  // every data type are used in array.

marks[7]=85 // adds the value to the array.

marks[2]=94  // changing the value of the array.

for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}

// arrays methods

let marks1=[12,52,75,48,58,95]

// convert to string
let s=marks1.toString()
console.log(s)

// joins the elements using specified character.
let j=marks1.join("/")
console.log(j)

// removes last elements of the array
let p=marks1.pop()
console.log(marks1)
console.log(p)

// adds the elements at the end of the array.
let p1=marks1.push(85)
console.log(marks1)
console.log(p1)

// removes first elements of arrays
marks1.shift()
console.log(marks1)

// adds first elements of arrays
marks1.unshift(15)
console.log(marks1)

// delete elements using index.
delete marks1[3]
console.log(marks1)

// join two arrays to use concat.
let c = marks.concat(marks1)
console.log(c)

// sorting the array alphabetically.
let num = [14,8,25,58,9,7,34]
console.log(num.sort())

// assecnding order
let compare = (a,b) =>{
    return a-b
}
console.log(num.sort(compare))

// descending order
let compare1 = (a,b) =>{
    return b-a
}
console.log(num.sort(compare1))

// reverse the array
console.log(marks1.reverse())

// adds the new items of arrays
const number=[1,2,3,4,5]
let s1 = number.splice(2,2,15,16,17)
console.log(s1 , number)

// slice the elements of arrays and creates new arrays.
console.log(number.slice(2))
console.log(number.slice(2,5))
