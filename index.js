const colorArr = [
  "red", "blue", "orange", "green", "yellow", "purple", "violet", "tomato"
];
const button = document.querySelector(".button");
const margin = document.querySelector(".btn-div");
let num = document.querySelector(".num");
let i = 0;
let j = 0;
let k = 1;

button.addEventListener("click", function changeColor() {
  let marginNum = Math.floor(Math.random() * (1000 - (0) + 1) + 100);
  margin.style.marginLeft = marginNum + "px";


  num.style.color = colorArr[j];
  button.style.backgroundColor = colorArr[i];
  i++; j++;
  if (i === colorArr.length) i = 0;
  if (j === colorArr.length) j = 0;

  // Increment logic
  if (k > 500) {
    k += 10;
  } else if (k > 200) {
    k += 5;
  } else if (k > 100) {
    k += 3;
  } else if (k > 50) {
    k += 2;
  } else {
    k++;
  }

  num.innerText = k;
});
