// popup/popup.js
document.getElementById("startBtn").addEventListener("click", () => {
  console.log("Jumble button clicked!");
  
  // Get the active tab and send message
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log("Found tabs:", tabs);
    if (tabs[0]) {
      console.log("Sending jumble message to tab:", tabs[0].id);
      chrome.tabs.sendMessage(tabs[0].id, { action: "jumbleWords" }, (response) => {
        console.log("Response received:", response);
        if (chrome.runtime.lastError) {
          console.error("Error sending message:", chrome.runtime.lastError);
          // Show error in popup
          document.body.innerHTML = '<div style="color: red; padding: 10px;">Error: Could not send message to page. Make sure you are on a webpage.</div>';
        } else {
          console.log("Success:", response);
          // Show success in popup
          document.body.innerHTML = '<div style="color: green; padding: 10px;">Words jumbled successfully!</div>';
          // Reset after 2 seconds
          setTimeout(() => {
            location.reload();
          }, 2000);
        }
      });
    } else {
      console.error("No active tab found!");
      document.body.innerHTML = '<div style="color: red; padding: 10px;">Error: No active tab found!</div>';
    }
  });
});
