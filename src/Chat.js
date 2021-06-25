import React from 'react';
import { useParams } from "react-router-dom";
import "./Chat.css"; 

function Chat() {
    // useparams hook pulls router id
    const { roomId } = useParams(); 
    return (
        <div className="chat">
            <h2>{roomId}</h2>
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 chat__channelName>name</h4>

                </div>
                <div className="chat__headerRight">
                    
                </div>

            </div>
        </div>
    )
}

export default Chat
