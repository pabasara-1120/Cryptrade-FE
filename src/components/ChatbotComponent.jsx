// ChatbotComponent.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ChatbotComponent.css';

const ChatbotComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
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
                            {/* Chat messages will go here */}
                            <p className="bot-message">Hi! How can I assist you today?</p>
                        </div>
                        <div className="chatbot-input">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="chat-input"
                            />
                            <button className="send-button">Send</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatbotComponent;
