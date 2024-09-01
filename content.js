// content.js

// Function to copy all text from the page
function copyAllTextFromPage() {
    // Retrieve all visible text from the body of the page
    return document.body.innerText;
}

// Copy the text and store it in the Chrome extension's local storage
let copiedText = copyAllTextFromPage();
chrome.storage.local.set({copiedText: copiedText}, () => {
    console.log('Text copied and stored locally.');
});
