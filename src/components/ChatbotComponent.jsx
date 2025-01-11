import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ChatbotComponent.css';

const ChatbotComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([{ sender: 'bot', text: 'Hi! How can I assist you today?' }]);
    const [input, setInput] = useState('');
    const jwt = sessionStorage.getItem('jwt'); // Assume JWT is stored in local storage after user login

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        // Display user's message in chat
        setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: input }]);

        try {
            // Send user message and JWT to the backend
            const response = await fetch('http://localhost:8000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`, // Pass JWT in the Authorization header
                },
                body: JSON.stringify({ prompt: input }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }




            const decoder = new TextDecoder('utf-8');
            let botMessage = '';

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                botMessage += decoder.decode(value, { stream: true });
                setMessages((prevMessages) => [
                    ...prevMessages.slice(0, -1), // Remove the placeholder bot message
                    { sender: 'bot', text: botMessage }, // Append the updated message
                ]);
            }


        } catch (error) {
            console.error('Error sending message:', error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'bot', text: 'Sorry, something went wrong. Please try again later.' },
            ]);
        }

        setInput(''); // Clear input
    };

    return (
        <div>
            {/* Floating Button with Motion */}
            <motion.button
                className="chatbot-button"
                onClick={toggleChatbot}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                💬
            </motion.button>

            {/* Chatbot Interface */}
            {isOpen && (
                <div className="chatbot-interface">
                    <div className="chatbot-header">
                        <h3>TradeBot</h3>
                        <button onClick={toggleChatbot} className="close-button">&times;</button>
                    </div>
                    <div className="chatbot-body">
                        <div className="chatbot-messages">
                            {messages.map((msg, index) => (
                                <p
                                    key={index}
                                    className={msg.sender === 'bot' ? 'bot-message' : 'user-message'}
                                >
                                    {msg.text}
                                </p>
                            ))}
                        </div>
                        <div className="chatbot-input">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="chat-input"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                            />
                            <button className="send-button" onClick={sendMessage}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatbotComponent;
