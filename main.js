

let input = document.querySelector("#input")
let obj = []
input.addEventListener("keyup",(e) => {
  // console.log(input.value);
  let a = input.value 
  let b = [a]
  let res = b.includes("#")
  console.log(res);
  if (res == true) {
    input.style.color = "red"
  }
  console.log(b);
  // if (input.value.includes == "#") {
  //   console.log("chiqdi");
  // }
})

let img = document.querySelector("#img")
let divichiimg = document.querySelector("#divichiimg")
let div = document.querySelector("#div")

img.addEventListener("mousemove",(e) => {
  let a = e.offsetX
  let b = e.offsetY
  divichiimg.style.transform = `translate(-${a}px, -${b}px) scale(2)`
  div.style.transform = `translate(${a}px, ${b}px)`
})


let span = document.querySelector("#spanm")
let range = document.querySelector("#range")
range.addEventListener("input",(e) => {
  console.log(range.value);
  span.style.width = `${range.value}%`
})


// div.addEventListener("mousemove",(e) => {
//   let c = e.offsetX
//   let d = e.offsetY
//   div.style.transform = `translate(${c}px, ${d}px) `
// })












