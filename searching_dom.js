// first

let title = document.getElementById("card-1")
//title.style.color = "red"

//second
let t1 = document.querySelectorAll(".card-title")
t1[0].style.color = "red"
t1[1].style.color = "blue"
t1[2].style.color = "green"

// third
document.querySelector(".tag").style.color = "cyan"

// fourth
console.log(document.querySelector(".card").getElementsByTagName("a"))

//five
document.getElementsByClassName("card-text")[0].style.color = "blue"

// six
console.log(document.getElementsByName("card"))

document.getElementsByClassName("nav-link active")[0].style.color = "red"

