import React from 'react'
import './chatMessage.css'

const chatMessage = ({messageObject}) => {
    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    // <div className={`message ${messageClass}`}>
    
    return (
        
    <>
        <div className={`message received`}>
            <img src={messageObject.userObject.userAvatar} alt="avatar" className='' />    
            <p>{messageObject.content}
                <div className='messageTimeStamp'>{messageObject.timeSent || "Time not available"}</div>
            </p>
        </div>
        <div className={`message sent`}>
            <img src={messageObject.userObject.userAvatar} alt="avatar" className='' />    
            <p>{messageObject.content}
                <div className='messageTimeStamp'>{messageObject.timeSent || "Time not available"}</div>
            </p>
        </div>
    </>)

  
}

export default chatMessage