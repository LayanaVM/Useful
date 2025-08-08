// popup/popup.js
document.getElementById("startBtn").addEventListener("click", () => {
  console.log("🔮 Start button clicked!");
  
  // Get the active tab and send message
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs[0]) {
      console.log("🔮 Sending message to tab:", tabs[0].id);
      chrome.tabs.sendMessage(tabs[0].id, { action: "startGreekWorld" }, (response) => {
        if (chrome.runtime.lastError) {
          console.error("🔮 Error:", chrome.runtime.lastError);
        } else {
          console.log("🔮 Success:", response);
        }
      });
    }
  });
});
