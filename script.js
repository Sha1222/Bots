const mockResponses = {
    "hello": "Hello! How can I assist you today?",
    "help": "I'm here to help! You can ask me about our services or any general questions.",
    "bye": "Goodbye! Have a great day!",
    "default": "I'm not sure how to respond to that. Could you try rephrasing?"
};

function getBotResponse(userInput) {
    const normalizedInput = userInput.toLowerCase();
    return mockResponses[normalizedInput] || mockResponses["default"];
}

function sendMessage() {
    const inputElement = document.getElementById("user-input");
    const userInput = inputElement.value.trim();

    if (!userInput) return;

    const chatLog = document.getElementById("chat-log");

    // Create user message
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = userInput;

    chatLog.appendChild(userMessage);
    inputElement.value = ""; // Clear the input field
    inputElement.focus();     // Focus back on the input field

    // Simulate bot typing delay and display the response
    setTimeout(() => {
        const botReply = getBotResponse(userInput);

        // Create bot message container
        const botMessageContainer = document.createElement('div');
        botMessageContainer.className = 'bot-message-container';

        // Create bot avatar element (only for bot messages)
        const botAvatar = document.createElement('div');
        botAvatar.className = 'bot-avatar';
        const botImage = document.createElement('img');
        botImage.src = 'character.png'; // Adjust image source as needed
        botImage.alt = 'Chatbot Avatar';
        botAvatar.appendChild(botImage);

        // Create bot message element
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.textContent = botReply;

        // Append avatar and message to the bot message container
        botMessageContainer.appendChild(botAvatar);
        botMessageContainer.appendChild(botMessage);
        chatLog.appendChild(botMessageContainer); // Add bot message container to the log

        // Auto-scroll to the latest message
        chatLog.scrollTop = chatLog.scrollHeight;
    }, 700); // Add a small delay before the bot responds (700ms)
}
