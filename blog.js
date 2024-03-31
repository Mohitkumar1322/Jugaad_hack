document.addEventListener("DOMContentLoaded", function() {
    const blogContent = document.getElementById('blogContent');
    const wordCountDisplay = document.getElementById('wordCount');
    const countWordsBtn = document.getElementById('countWordsBtn');
    const correctWordsBtn = document.getElementById('correctWordsBtn');
    const voiceToTextBtn = document.getElementById('voiceToTextBtn');
  
    // Function to count words in the blog content
    countWordsBtn.addEventListener('click', function() {
      const words = blogContent.value.trim().split(/\s+/);
      const wordCount = words.length;
      wordCountDisplay.textContent = `Word count: ${wordCount}`;
    });
  
    // Function to correct misspelled words by highlighting in red
    correctWordsBtn.addEventListener('click', function() {
      const words = blogContent.value.trim().split(/\s+/);
      const misspelledWords = ['mistake', 'wrong']; // Example misspelled words
      words.forEach(word => {
        if (misspelledWords.includes(word.toLowerCase())) {
          blogContent.value = blogContent.value.replace(new RegExp(word, 'gi'), `<span style="color: red">${word}</span>`);
        }
      });
    });
  
    // Function to convert speech to text
    voiceToTextBtn.addEventListener('click', function() {
      const recognition = new window.webkitSpeechRecognition(); // Using Webkit Speech Recognition API
      recognition.lang = 'en-US'; // Set language to English (United States)
  
      recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        blogContent.value += transcript;
      }
  
      recognition.start();
    });
  });
  