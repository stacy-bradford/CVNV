chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: extractJobDescription
  });
});

function extractJobDescription() {
  const jobDescription = document.body.innerText || "";
  chrome.storage.local.set({ jobDescription }, () => {
    chrome.runtime.openOptionsPage();
  });
}
