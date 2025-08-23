import ChatMessage from './ChatMessage';
import UseAutoScroll from './UseAutoScroll'
import './ChatMessages.css'

const ChatMessages = ({ chatMessages }) => {
  const chatMessagesRef = UseAutoScroll([chatMessages]);

  return(
    <div 
      className="chat-messages-container"
      ref={chatMessagesRef}
    >
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
            message={chatMessage.message}
            sender={chatMessage.sender}
            time={chatMessage.time}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  )
}

export default ChatMessages