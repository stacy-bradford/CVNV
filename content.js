// Function to extract job description from common elements
function extractJobDescription() {
    let jobDescription = "";

    // Try to extract text from common job description containers
    const selectors = [
        "div.jobDescription",          // Example: LinkedIn, Glassdoor
        "div.description",             // Example: Indeed, Monster
        "div#jobDescriptionText",      // Example: ZipRecruiter
        "section.job-desc",            // Example: CareerBuilder
        "div.description-content",     // Example: Generic websites
        "div[data-test-id='job-description-text']", // Example: Some newer sites
        "div[class*='job-description']", // Generic match for other potential job boards
        "article"                      // Sometimes entire page content is in an article tag
    ];

    for (let selector of selectors) {
        const element = document.querySelector(selector);
        if (element) {
            jobDescription = element.innerText.trim();
            break; // Stop once we find the first non-empty match
        }
    }

    // Fallback if no specific container is found
    if (!jobDescription) {
        jobDescription = document.body.innerText.trim(); // Extract entire page text if specific container not found
    }

    return jobDescription;
}

// Send the extracted job description to the background script
const jobDescription = extractJobDescription();
chrome.runtime.sendMessage({ jobDescription: jobDescription });
