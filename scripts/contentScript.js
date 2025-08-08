// scripts/contentScript.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "startGreekWorld") {
    console.log("🔮 Triggering Greek World...");
    window.dispatchEvent(new Event("ENTER_GREEK_WORLD"));
  }
});
