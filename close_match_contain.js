// matches
let a = document.getElementById("id1")
console.log(a.matches(".class")) // returns false
console.log(a.matches(".box")) // returns true

//closest
let b = document.getElementById("sp1")
console.log(b.closest(".box")) // returns div elements
console.log(b.closest("#sp1")) // returns span elements

// contains
console.log(a.contains(b)) // true
console.log(b.contains(b))  // true
console.log(b.contains(a))  // false

Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "cyan"
});