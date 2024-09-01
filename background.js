chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    if (tab.url.includes('greenhouse.io') || tab.url.includes('lever.co')) {
      chrome.action.setIcon({ path: "icons/icon-alert.png", tabId: tabId });
    }
  }
});

chrome.action.onClicked.addListener((tab) => {
  // Trigger resume tailoring and cover letter generation
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});
