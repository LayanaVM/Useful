// Remove any existing eye if present
const existing = document.getElementById("medusa-eye");
if (existing) existing.remove();

// Create the eye element
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
document.body.appendChild(eye);

let hoverTime = 0;
let hoverTimer;
let triggered = false;

// Hover starts
eye.addEventListener("mouseenter", () => {
  hoverTimer = setInterval(() => {
    hoverTime += 100;
    if (hoverTime >= 3000 && !triggered) {
      triggered = true;
      window.dispatchEvent(new Event("ENTER_GREEK_WORLD"));
      console.log("🌀 Entering Greek World...");
      clearInterval(hoverTimer);
      eye.remove(); // remove eye immediately
    }
  }, 100);
});

// Hover ends
eye.addEventListener("mouseleave", () => {
  clearInterval(hoverTimer);
  hoverTime = 0;
});

// Auto remove after 5 seconds if not triggered
setTimeout(() => {
  if (!triggered) {
    eye.remove();
  }
}, 5000);
