// CVNV Content Script - Extracting Job Descriptions from ATS Platforms

function extractJobDescription() {
    let jobDescription = '';

    // Detect if we are on Greenhouse
    if (window.location.hostname.includes("greenhouse.io")) {
        const descriptionElement = document.querySelector('.job-description, .job_description');
        if (descriptionElement) {
            jobDescription = descriptionElement.innerText.trim();
        }

    // Detect if we are on Lever
    } else if (window.location.hostname.includes("lever.co")) {
        const descriptionElement = document.querySelector('.content, .posting-section');
        if (descriptionElement) {
            jobDescription = descriptionElement.innerText.trim();
        }

    // Detect if we are on Workday
    } else if (window.location.hostname.includes("workday.com")) {
        const descriptionElement = document.querySelector('.WD-Job-Description, .workdayRichTextArea');
        if (descriptionElement) {
            jobDescription = descriptionElement.innerText.trim();
        }

    // Detect if we are on Jobvite
    } else if (window.location.hostname.includes("jobvite.com")) {
        const descriptionElement = document.querySelector('.jv-job-detail-description, .job-description');
        if (descriptionElement) {
            jobDescription = descriptionElement.innerText.trim();
        }
    }

    return jobDescription;
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getJobDescription') {
        const jobDescription = extractJobDescription();
        sendResponse({ description: jobDescription });
    }
});
