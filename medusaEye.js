// Remove existing eye if already present
const existing = document.getElementById("medusa-eye");
if (existing) existing.remove();

// Create Medusa eye
const eye = document.createElement("div");
eye.id = "medusa-eye";
eye.style.position = "fixed";
eye.style.top = "50%";
eye.style.left = "50%";
eye.style.transform = "translate(-50%, -50%)";
eye.style.width = "100px";
eye.style.height = "100px";
eye.style.borderRadius = "50%";
eye.style.background = "radial-gradient(ellipse at center, green 0%, black 80%)";
eye.style.boxShadow = "0 0 20px 10px lime";
eye.style.zIndex = "9999";
eye.style.cursor = "pointer";
document.body.appendChild(eye);

let hoverTime = 0;
let hoverTimer;
let triggered = false;

eye.addEventListener("mouseenter", () => {
  hoverTimer = setInterval(() => {
    hoverTime += 100;
    if (hoverTime >= 3000 && !triggered) {
      triggered = true;
      window.dispatchEvent(new Event("ENTER_GREEK_WORLD"));
      console.log("🌀 Entering Greek World...");
      clearInterval(hoverTimer);
      eye.remove();
    }
  }, 100);
});

eye.addEventListener("mouseleave", () => {
  clearInterval(hoverTimer);
  hoverTime = 0;
});

setTimeout(() => {
  if (!triggered) eye.remove();
}, 5000);
