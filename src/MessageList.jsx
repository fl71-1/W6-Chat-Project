import React from 'react';

const MessageList = ({ user, messages, onDeleteMessage }) => { 
  return (
    <div className="h-[49vh] overflow-y-auto mb-4 bg-chat-background p-4 rounded-2xl">
      {messages.map((msg, index) => {
        return (
          <div
             key={index}
             className={`mb-2 p-2 rounded-lg max-w-[85%] flex justify-between ${
                msg.user === user 
                  ? 'bg-[#d3eebc] text-black self-end' 
                  : 'bg-[#ffffff] text-black self-start'
              }`}
          >
            {msg.deleted ? (
              <span className="text-gray-500 italic flex justify-between w-[12vw]  ">
.لقد حذفت هذه الرساله 
<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-ban" viewBox="0 0 16 16">
  <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
</svg>
              </span>
            ) : (
              <span>{msg.text}</span> 
            )}
            
            <button
              onClick={() => onDeleteMessage(index)} 
              className="text-red-500 ml-2 text-sm"
            >
              حذف
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
