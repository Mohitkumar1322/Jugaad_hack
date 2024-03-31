document.getElementById('textGenerationForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const prompt = document.getElementById('prompt').value;
    
    try {
        const response = await fetch('/generate_text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });
        
        const data = await response.json();
        
        // Display generated text on the webpage
        document.getElementById('generatedText').textContent = data.generated_text;
    } catch (error) {
        console.error('Error:', error);
    }
});
