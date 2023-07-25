// import React from 'react';
interface userMessage{
  role: string,
  content:string
}
interface MessageDisplayProps{
  message: userMessage
  
  }


const Messagedisplay = ({message}:MessageDisplayProps) => {
    return (
      <div className="message-display">
        <p id="icon">-</p>
        <p>{message.role}</p>
        <p>{message.content}</p>
      </div>
    );
  }
  // export{};
  export default Messagedisplay
  