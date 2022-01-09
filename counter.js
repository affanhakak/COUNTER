const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const reset = document.querySelector(".reset");
const score = document.querySelector(".score");

let count = 0;

button1.addEventListener("click", (e) => {
  count += 1;
  score.textContent = count;
  score.style.color = "green";
});

button2.addEventListener("click", () => {
  count -= 1;
  score.textContent = count;
  score.style.color = "red";
});

reset.addEventListener("click", () => {
  score.textContent = 0;
  count = 0;
  score.style.color = "black";
});
