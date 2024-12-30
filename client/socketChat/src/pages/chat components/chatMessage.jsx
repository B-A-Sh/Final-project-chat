
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
            <br />
            <br />
            <br />
        </div>
    </>)
}

export default chatMessage