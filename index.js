const colorArr = [
  "red",
  "blue",
  "orange",
  "green",
  "yellow",
  "purple",
  "violet",
  "tomato",
];
const button = document.querySelector(".button");
const margin = document.querySelector(".btn-div");
let i = 0;
let j = 0;
button.addEventListener("click", function changeColor() {
  let marginNum = Math.floor(Math.random() * (500 - 100 + 1) + 100);
  console.log(marginNum);
  
  margin.style.margin = marginNum + "px";

  button.style.backgroundColor = colorArr[i];
  i++;

  if (i === colorArr.length) {
    i = 0;
  }
});
