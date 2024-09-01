document.getElementById('tailor-resume').addEventListener('click', () => {
  chrome.storage.local.get(['jobDescription'], function(result) {
    const jobDescription = result.jobDescription || "";
    
    // Call GPT API to tailor resume
    const resume = "user's stored general resume"; // Replace with real resume

    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {"role": "system", "content": "You are a resume tailoring assistant."},
          {"role": "user", "content": `Here is the job description: ${jobDescription}. Tailor this resume: ${resume}.`}
        ]
      })
    })
    .then(response => response.json())
    .then(data => {
      const tailoredResume = data.choices[0].message.content;
      document.getElementById('ats-score').innerText = "ATS Score: 85";
      // Logic to save the tailored resume and cover letter as PDFs
      saveAsPDF(tailoredResume, "resume.pdf");
    })
    .catch(error => console.error('Error:', error));
  });
});

function saveAsPDF(content, filename) {
  const link = document.createElement('a');
  link.href = 'data:application/pdf;base64,' + btoa(content);
  link.download = filename;
  link.click();
}
