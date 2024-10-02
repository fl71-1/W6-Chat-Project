import React, { useState } from 'react';

const MessageInput = ({ onSendMessage, setIsTyping, user }) => { 
  const [message, setMessage] = useState(''); 
  const handleSendMessage = () => {
    if (message.trim()) { 
      onSendMessage({ user: user, text: message, deleted: false }); 
      setMessage(''); 
      setIsTyping(false); 
    }
  };

  return (
    <div class=" flex justify-center space-x-2 items-end h-[7.9vh] ">

    <div className="flex justify-between w-[50vw] bg-[#f8f8f7] mx-2 rounded-full ">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus text-[#599dfb]" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>

      <input
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value); 
          setIsTyping(e.target.value.length > 0); 
        }}
        className="flex justify-between w-25 border border-gray-300  rounded-full  "
        placeholder="Write a message"
        
        />
      
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="36" fill="currentColor" class="bi bi-camera  text-[#599dfb] " viewBox="0 0 16 16">
  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="36" fill="currentColor" class="bi bi-mic  text-[#599dfb] " viewBox="0 0 16 16">
  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
  <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/>
</svg>

        
      {message.length > 0 && (
        
        <button
        
        onClick={handleSendMessage}
        className="bg-gradient-to-r from-green-400 to-green-500 text-white px-1  rounded-full shadow-md  "
        >
        

<svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" fill="currentColor" className="bi bi-send-fill " viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
</svg>

        </button>
        
      )}
    </div>
      </div>
  );
};

export default MessageInput;
