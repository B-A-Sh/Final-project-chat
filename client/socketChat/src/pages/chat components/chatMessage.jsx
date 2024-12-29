import React from 'react'
import './chatMessage.css'

const chatMessage = ({messageObject,testFlag,className}) => {
    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    // <div className={`message ${messageClass}`}>
    
    console.log(messageObject.userObject.id);
    console.log(testFlag);
    

    return (
        
    <>
        <div className={`${className} message  chatApp__convMessageItem`}>
            <img src={messageObject.userObject.userAvatar} alt="avatar" className='' />    
            <div>{messageObject.content}
                <p className='messageTimeStamp'>{messageObject.timeSent || "Time not available"}</p>
          
            </div>
        </div>
    </>)

  
}

export default chatMessage