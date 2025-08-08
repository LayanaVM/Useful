document.getElementById("start").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  await chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ["greekWorld.css"]
  });

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["greekWorld.js"]
  });

  // Trigger the medusa eye
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["medusaEye.js"]
  });
});
