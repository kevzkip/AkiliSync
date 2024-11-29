// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode is already enabled in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Toggle dark mode when the button is clicked
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save the dark mode state in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});
// AI Quiz Feedback
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const selectedAnswer = document.querySelector('input[name="q1"]:checked');
    const feedback = document.getElementById('feedback');
  
    if (selectedAnswer) {
      const answerValue = selectedAnswer.value;
      
      if (answerValue === "1") {
        feedback.innerHTML = "<p style='color: green;'>Correct! Object-Oriented Programming is the right answer!</p>";
      } else {
        feedback.innerHTML = "<p style='color: red;'>Oops! That’s not quite right. The correct answer is Object-Oriented Programming.</p>";
      }
    } else {
      feedback.innerHTML = "<p style='color: orange;'>Please select an answer!</p>";
    }
  });
  
  // AI Chatbot Logic (placeholder for functionality)
  document.getElementById('sendMessageBtn').addEventListener('click', function() {
    const message = document.getElementById('chatInput').value;
    const chatbotBody = document.querySelector('.chatbot-body');
    chatbotBody.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    chatbotBody.innerHTML += `<p><strong>AI Assistant:</strong> I'm here to help with your learning! How can I assist you?</p>`;
    document.getElementById('chatInput').value = ''; // Clear input field
  });
  