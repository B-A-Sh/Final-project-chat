import React from 'react'
import './chatMessage.css'

const chatMessage = ({messageObject}) => {
    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    // <div className={`message ${messageClass}`}>

    return (
        
    <>
        {/* <div className={`message sent chat-bubble-left`}> */}
        <div className={`message received chat-bubble-left`}>
            <img src={messageObject.avatar} alt="avatar" className='' />    
            <p>{messageObject.content}</p>
        </div>
    </>)

  
}

export default chatMessage