// background.js

// Listener for when the extension icon is clicked
chrome.action.onClicked.addListener((tab) => {
    // Inject content.js into the current tab
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']  // Inject content.js into the tab
    });
});
