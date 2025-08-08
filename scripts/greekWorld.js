import { jumbleWord } from "./utils/textJumbler.js";

let flickerInterval;
let chaosActive = false;

window.addEventListener("ENTER_GREEK_WORLD", () => {
  if (!chaosActive) startGreekWorld();
});

function startGreekWorld() {
  chaosActive = true;
  jumbleAllParagraphs();
  startFlickerEffect();
  spawnExitCircle();
}

function jumbleAllParagraphs() {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((p) => {
    const words = p.innerText.split(" ");
    const jumbled = words.map(jumbleWord).join(" ");
    p.innerText = jumbled;
  });
}

function startFlickerEffect() {
  let isDark = false;
  document.body.classList.add("greek-light");

  flickerInterval = setInterval(() => {
    isDark = !isDark;
    document.body.classList.toggle("greek-dark", isDark);
    document.body.classList.toggle("greek-light", !isDark);
  }, 1500);
}

function spawnExitCircle() {
  const circle = document.createElement("div");
  circle.id = "exit-circle";

  const randX = Math.random() * 80 + 10;
  const randY = Math.random() * 80 + 10;
  circle.style.left = `${randX}%`;
  circle.style.top = `${randY}%`;

  circle.addEventListener("click", exitGreekWorld);
  document.body.appendChild(circle);
}

function exitGreekWorld() {
  chaosActive = false;
  clearInterval(flickerInterval);
  document.body.classList.remove("greek-light", "greek-dark");

  const circle = document.getElementById("exit-circle");
  if (circle) circle.remove();
}
