const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",  ()=> {
  randomNumber = randomNumberFunc();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function randomNumberFunc() {
  return Math.floor(Math.random() * colors.length);
}
