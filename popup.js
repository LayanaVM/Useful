document.getElementById("start").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Inject CSS
  await chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ["greekWorld.css"]
  });

  // Inject Script and dispatch event inside it
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const script = document.createElement("script");
      script.src = chrome.runtime.getURL("greekWorld.js");
      script.onload = () => {
        window.dispatchEvent(new Event("ENTER_GREEK_WORLD"));
        script.remove();
      };
      document.head.appendChild(script);
    }
  });
});
