import { jumbleText } from "./utils/textJumbler.js";

window.addEventListener("ENTER_GREEK_WORLD", () => {
  scrambleAllText();
  startFlickerEffect();
  spawnExitCircle();
});

function scrambleAllText() {
  document.querySelectorAll("p").forEach(p => {
    p.dataset.original = p.textContent;
    p.textContent = jumbleText(p.textContent);
  });
}

function startFlickerEffect() {
  document.body.classList.add("flicker-start");
  let dark = false;
  setInterval(() => {
    document.body.classList.toggle("dark-mode", dark);
    dark = !dark;
  }, 1000);
}

function spawnExitCircle() {
  const circle = document.createElement("div");
  circle.className = "greek-exit-circle";
  positionCircleRandomly(circle);
  circle.addEventListener("mouseenter", exitGreekWorld);
  document.body.appendChild(circle);
}

function positionCircleRandomly(circle) {
  const x = Math.random() * 80 + 10;
  const y = Math.random() * 80 + 10;
  circle.style.position = "fixed";
  circle.style.left = `${x}vw`;
  circle.style.top = `${y}vh`;
}

function exitGreekWorld() {
  document.querySelectorAll("p").forEach(p => {
    if (p.dataset.original) p.textContent = p.dataset.original;
  });

  document.body.classList.remove("dark-mode", "flicker-start");
  document.querySelector(".greek-exit-circle")?.remove();
}
