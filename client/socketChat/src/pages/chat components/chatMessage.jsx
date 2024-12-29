import React from 'react'
import './chatMessage.css'

const chatMessage = ({messageObject}) => {
    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    // <div className={`message ${messageClass}`}>
    
    return (
        
    <>
        {/* <div className={`message sent chat-bubble-left`}> */}
        <div className={`message received chat-bubble-left`}>
            <img src={messageObject.userObject.userAvatar} alt="avatar" className='' />    
            <p>{messageObject.content}
                <p className='mmessageTimeStamp'>{messageObject.timeSent || "Time not available"}</p>
            </p>
        </div>
    </>)

  
}

export default chatMessage