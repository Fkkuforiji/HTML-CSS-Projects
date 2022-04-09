const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
// the 30 is 30 milliseconds not 30 seconds
let int = setInterval(blurring, 30);

function blurring() {
  // load is increasing by 1 increment
  load++;

  // without this limiter, the function will run infinitely
  if (load > 99) {
    // test to see what happens if this clearinterval is gone
    clearInterval(int);
  }
  // backticks " ` " are needed for template literals
  // innerText refers to the HTML content inside the HTML element of the constant before the .innerText
  //load is referring to the let load above
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  //blur is referring to the blur attribute in the bg css section
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
