// Remove if already present
const existing = document.getElementById("medusa-eye");
if (existing) existing.remove();

// Create the eye div
const eye = document.createElement("div");
eye.id = "medusa-eye";
document.body.appendChild(eye);

// Hover detection
let hoverTime = 0;
let hoverTimer;

eye.addEventListener("mouseenter", () => {
  hoverTimer = setInterval(() => {
    hoverTime += 100;
    if (hoverTime >= 3000) {
      window.dispatchEvent(new Event("ENTER_GREEK_WORLD"));
      console.log("🌀 Entering Greek World...");
      clearInterval(hoverTimer);
    }
  }, 100);
});

eye.addEventListener("mouseleave", () => {
  clearInterval(hoverTimer);
  hoverTime = 0;
});

// Auto remove after 5 seconds
setTimeout(() => {
  eye.remove();
}, 5000);
