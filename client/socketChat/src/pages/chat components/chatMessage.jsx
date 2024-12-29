import React from 'react'

const chatMessage = ({messageObject}) => {
    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    // <div className={`message ${messageClass}`}>

    return (
        
    <>
        <div className={`message sent`}>
            <img src={messageObject.avatar} alt="avatar" className='' />    
            <p>{messageObject.content}</p>
        </div>
    </>)

  
}

export default chatMessage