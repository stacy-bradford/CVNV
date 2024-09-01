// This function copies all text from the page
function copyAllTextFromPage() {
    return document.body.innerText;
}

// Execute when the script runs (triggered by the background.js)
let copiedText = copyAllTextFromPage();

// Store the copied text in Chrome's local storage
chrome.storage.local.set({ copiedText: copiedText }, () => {
    console.log('Text copied and stored locally.');
});
