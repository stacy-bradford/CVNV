// URL of the CVNV GPT interface
const CVNV_URL = 'https://chat.openai.com/chat';  // Replace with your specific CVNV GPT URL if different

// Listener for when the extension icon is clicked
chrome.action.onClicked.addListener(async (tab) => {
    // Check if CVNV GPT tab is already open
    let [cvnvTab] = await chrome.tabs.query({ url: CVNV_URL });

    if (cvnvTab) {
        // If already open, bring it to focus
        chrome.tabs.update(cvnvTab.id, { active: true });
    } else {
        // If not open, create a new tab with the CVNV GPT interface
        chrome.tabs.create({ url: CVNV_URL });
    }
});
