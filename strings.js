let a = "shubham" // this is used to double quote.

let b='shubh      ' // this is also used to single quote.

// template literals

let sentence = `this is "the" name`  // `` this is called backtics. it is used single or double quote in backtics.
console.log(sentence)

let sentence1 = `this is is ${a}`  // insert a variable in template literals, this method is used.
console.log(sentence1)

// strings method
console.log(a.length)
console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log(a.slice(2,5))
console.log(a.slice(2))
console.log(a.replace("s","S"))
console.log(a.concat("",b))
console.log(b.trim())
console.log(a.includes("sh"))
console.log(a.startsWith("sh"))
console.log(a.endsWith("am"))
