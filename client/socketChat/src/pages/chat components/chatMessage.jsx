import { useContext } from "react"
import { Context } from "../HomePage"


const ChatMessage = ({messageObject}) => {
    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    // <div className={`message ${messageClass}`}>
    
    const userObject = useContext(Context)

    // console.log(messageObject.userObject.id);

    const messageClass = messageObject.userObject.id === userObject.id ? 'sent' : 'received'


    return (
    <>
        <div className={`${messageClass} message `}>
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

export default ChatMessage