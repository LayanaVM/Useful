// scripts/contentScript.js

console.log("Word Jumbler Content Script Loaded!");

// Add a simple visual indicator that the script is loaded
const indicator = document.createElement('div');
indicator.style.cssText = `
  position: fixed;
  top: 10px;
  left: 10px;
  background: #007bff;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  z-index: 10000;
  font-family: Arial, sans-serif;
  opacity: 0.8;
`;
indicator.textContent = 'Word Jumbler Loaded';
document.body.appendChild(indicator);

// Remove indicator after 5 seconds
setTimeout(() => {
  if (indicator.parentNode) {
    indicator.parentNode.removeChild(indicator);
  }
}, 5000);

// Word jumbling function
function jumbleWord(word) {
  // Skip words with special characters or numbers
  if (!/^[a-zA-Z]+$/.test(word)) return word;
  if (word.length <= 3) return word;
  
  const middle = word.slice(1, -1).split('');
  for (let i = middle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [middle[i], middle[j]] = [middle[j], middle[i]];
  }
  
  return word[0] + middle.join('') + word[word.length - 1];
}

// Jumble all text on the page
function jumbleAllText() {
  console.log("Jumbling text elements...");
  
  let jumbledCount = 0;
  
  // Target specific elements that are more likely to contain readable text
  const selectors = [
    "p", "h1", "h2", "h3", "h4", "h5", "h6", 
    "li", "td", "th", "span", "div",
    ".mw-parser-output p", // Wikipedia specific
    ".mw-parser-output li", // Wikipedia specific
    ".mw-parser-output h1", // Wikipedia specific
    ".mw-parser-output h2", // Wikipedia specific
    ".mw-parser-output h3", // Wikipedia specific
    ".mw-parser-output h4", // Wikipedia specific
    ".mw-parser-output h5", // Wikipedia specific
    ".mw-parser-output h6"  // Wikipedia specific
  ];
  
  // Combine all selectors
  const allElements = document.querySelectorAll(selectors.join(", "));
  console.log(`Found ${allElements.length} total elements`);
  
  allElements.forEach((el, index) => {
    // Skip elements that are likely to be navigation, ads, or non-content
    if (el.closest('nav') || el.closest('header') || el.closest('footer') || 
        el.closest('.sidebar') || el.closest('.navigation') || el.closest('.menu')) {
      return;
    }
    
    // Only process elements with actual text content
    if (el.innerText.trim() && el.children.length === 0) {
      const originalText = el.innerText;
      const words = originalText.split(" ");
      const jumbled = words.map(jumbleWord).join(" ");
      
      if (jumbled !== originalText) {
        el.innerText = jumbled;
        jumbledCount++;
        console.log(`Jumbled element ${index + 1}: "${originalText}" -> "${jumbled}"`);
      }
    }
  });
  
  console.log(`Text jumbling complete! Jumbled ${jumbledCount} elements.`);
  
  // Show a visual indicator that jumbling happened
  const successIndicator = document.createElement('div');
  successIndicator.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    background: #4CAF50;
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    z-index: 10000;
    font-family: Arial, sans-serif;
  `;
  successIndicator.textContent = `Jumbled ${jumbledCount} text elements!`;
  document.body.appendChild(successIndicator);
  
  // Remove indicator after 3 seconds
  setTimeout(() => {
    if (successIndicator.parentNode) {
      successIndicator.parentNode.removeChild(successIndicator);
    }
  }, 3000);
}

// Make functions available globally for testing
window.testJumble = jumbleAllText;
window.testJumbleWord = jumbleWord;

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received:", request);
  
  if (request.action === "jumbleWords") {
    console.log("Starting word jumbling...");
    jumbleAllText();
    sendResponse({ success: true, message: "Words jumbled!" });
  }
  
  return true; // Keep message channel open
});

console.log("Word Jumbler ready!");
console.log("Test functions available: window.testJumble() and window.testJumbleWord('example')");
