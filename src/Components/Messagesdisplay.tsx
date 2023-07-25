import React from 'react';
import Messagedisplay from "./Messagedisplay";

interface userMessage{
  role:string,
  content: string
}

interface MessagesDisplayProps{
userMessages: userMessage[]

}

const Messagesdisplay = ({userMessages}: MessagesDisplayProps ) => {
    return (
      <div className="messages-display">
        {userMessages.map ( (userMessage, _index) => 
        <Messagedisplay key={_index} message={userMessage}/>)}
        
      </div>
    )
  }
 
  export default Messagesdisplay
  