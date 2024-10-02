import './App.css'; 
import React, { useState } from 'react';
import ChatWindow from './ChatWindow'; 

function App() { 
  const [messages, setMessages] = useState([]); 

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]); 
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = messages.map((msg, i) =>
      i === index ? { ...msg, deleted: true } : msg 
    );
    setMessages(updatedMessages); 
  };

  return (
    <div className="min-h-screen bg-black-200 flex flex-col justify-center items-center p-4">
      <div className="h-[79vh] max-sm:w-full max-sm:h-full bg-white p-6  rounded-3xl shadow-2xl border border-gray-300 max-w-5xl flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        
        <ChatWindow
          user="Amy" 
          messages={messages} 
          onSendMessage={handleSendMessage} 
          onDeleteMessage={handleDeleteMessage} 
          isOnline={true} 
        />

        <ChatWindow
          user="John" 
          messages={messages} 
          onSendMessage={handleSendMessage} 
          onDeleteMessage={handleDeleteMessage} 
          isOnline={false} 
        />
      </div>
    </div>
  );
}

export default App; 