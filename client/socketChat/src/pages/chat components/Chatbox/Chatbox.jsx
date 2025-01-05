/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'
import '../finalStyle.css'
import ChatMessage from './chatMessage.jsx';
import { Context } from "../../HomePage"


const Chatbox = ({currentChat,sendMessagesToEveryone,userMsg,setUserMsg}) => {
    const currentUserObject = useContext(Context)   
    const [chatName, setChatName] = useState()

    useEffect(() => {
        if (currentChat) {
            setChatName(currentChat.isGroup ? currentChat.chatRoomName : nameFinder());
        }
    }, [currentChat, currentUserObject]);
    
    const sendMessage = (event) =>{
        event.preventDefault();
        sendMessagesToEveryone();
    }

    const nameFinder = () => {
        const user = currentChat.Participants.find(user => user.id != currentUserObject.id);
        return user ? user.userName : null;
    };

    const gameInvetaion = () =>{
        alert('this method is still in development')
    }
     
    
    return (
        <div className='chatbox'>
            <header>
                <h1>{chatName || "defult"}</h1>
            </header>
            <section>
                <main>
                    {currentChat && currentChat.messaagesList.map(m =>(
                            <ChatMessage key={m.messageId} messageObject={m}></ChatMessage>                        
                    ))}
                </main>
                <form onSubmit={sendMessage}>
                    <label htmlFor='inputMsg' ></label>
                    <input 
                        id='inputMsg' 
                        type="text"
                        value={userMsg}
                        placeholder='enter your message'
                        onChange={(e)=> {
                            setUserMsg(e.target.value)
                        }}/>
                    <button type='button' onClick={gameInvetaion}>🎲</button>
                    <button type='submit'>✨</button>
                </form>                   
            </section>
        </div>
    )
}
export default Chatbox
