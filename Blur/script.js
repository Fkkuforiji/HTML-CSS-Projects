const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('bg')

let load = 0
// the 30 is 30 milliseconds not 30 seconds
let int = setInterval(blurring, 30)

function blurring (){
 // load is increasing by 1 increment
 load++

 // without this limiter, the function will run infinitely
 if (load > 99) {
  // test to see what happens if this clearinterval is gone 
  clearInterval(int)
 }
// backticks " ` " are needed for template literals
// innerText refers to the HTML content inside the HTML element of the constant before the .innerText
  loadText.innerText = `${load}%`
  
}