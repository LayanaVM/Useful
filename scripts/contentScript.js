// scripts/contentScript.js

console.log("🔮 Medusa Curse Content Script Loaded!");

// Inject CSS for Greek World effects
const greekWorldCSS = `
body.greek-light {
  background-color: #ffffff !important;
  color: #000000 !important;
  transition: background-color 0.5s, color 0.5s;
}

body.greek-dark {
  background-color: #000000 !important;
  color: #ffffff !important;
  transition: background-color 0.5s, color 0.5s;
}

#exit-circle {
  position: fixed;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle, #ffd700, #ff4500);
  opacity: 0.7;
  transition: box-shadow 0.3s, opacity 0.3s;
  z-index: 9999;
  cursor: pointer;
}

#exit-circle:hover {
  box-shadow: 0 0 20px 8px rgba(255, 255, 255, 0.8);
  opacity: 1;
}
`;

// Inject the CSS immediately
const style = document.createElement('style');
style.textContent = greekWorldCSS;
document.head.appendChild(style);

// Word jumbling function
function jumbleWord(word) {
  if (word.length <= 3) return word;
  
  const middle = word.slice(1, -1).split('');
  for (let i = middle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [middle[i], middle[j]] = [middle[j], middle[i]];
  }
  
  return word[0] + middle.join('') + word[word.length - 1];
}

// Greek World state
let chaosActive = false;
let flickerInterval;

// Main function to start the Greek World
function startGreekWorld() {
  if (chaosActive) return; // Prevent multiple activations
  
  console.log("🔮 Starting Greek World...");
  chaosActive = true;
  
  // Jumble all text elements
  jumbleAllText();
  
  // Start visual effects
  startFlickerEffect();
  spawnExitCircle();
  
  console.log("🔮 Greek World activated!");
}

// Jumble all text on the page
function jumbleAllText() {
  console.log("🔮 Jumbling text elements...");
  
  // Jumble paragraphs
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(p => {
    if (p.innerText.trim()) {
      const words = p.innerText.split(" ");
      const jumbled = words.map(jumbleWord).join(" ");
      p.innerText = jumbled;
    }
  });
  
  // Jumble headings
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  headings.forEach(h => {
    if (h.innerText.trim()) {
      const words = h.innerText.split(" ");
      const jumbled = words.map(jumbleWord).join(" ");
      h.innerText = jumbled;
    }
  });
  
  // Jumble other text elements
  const textElements = document.querySelectorAll("span, div, li, td, th");
  textElements.forEach(el => {
    if (el.children.length === 0 && el.innerText.trim()) {
      const words = el.innerText.split(" ");
      const jumbled = words.map(jumbleWord).join(" ");
      el.innerText = jumbled;
    }
  });
  
  console.log("🔮 Text jumbling complete!");
}

// Start the flicker effect
function startFlickerEffect() {
  console.log("🔮 Starting flicker effect...");
  
  let isDark = false;
  document.body.classList.add("greek-light");
  
  flickerInterval = setInterval(() => {
    isDark = !isDark;
    document.body.classList.toggle("greek-dark", isDark);
    document.body.classList.toggle("greek-light", !isDark);
  }, 1500);
}

// Spawn the exit circle
function spawnExitCircle() {
  console.log("🔮 Spawning exit circle...");
  
  const circle = document.createElement("div");
  circle.id = "exit-circle";
  
  // Random position
  const randX = Math.random() * 80 + 10;
  const randY = Math.random() * 80 + 10;
  circle.style.left = `${randX}%`;
  circle.style.top = `${randY}%`;
  
  // Add click event
  circle.addEventListener("click", exitGreekWorld);
  
  // Add to page
  document.body.appendChild(circle);
}

// Exit the Greek World
function exitGreekWorld() {
  console.log("🔮 Exiting Greek World...");
  
  chaosActive = false;
  
  // Stop flicker
  if (flickerInterval) {
    clearInterval(flickerInterval);
  }
  
  // Remove visual effects
  document.body.classList.remove("greek-light", "greek-dark");
  
  // Remove exit circle
  const circle = document.getElementById("exit-circle");
  if (circle) {
    circle.remove();
  }
  
  console.log("🔮 Greek World exited!");
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("🔮 Message received:", request);
  
  if (request.action === "startGreekWorld") {
    startGreekWorld();
    sendResponse({ success: true, message: "Greek World activated!" });
  }
  
  return true; // Keep message channel open
});

console.log("🔮 Content script ready!");
