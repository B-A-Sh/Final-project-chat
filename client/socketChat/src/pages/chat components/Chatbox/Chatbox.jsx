/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'
// import '../chatStyle.css'
import ChatMessage from './chatMessage.jsx';
import { Context } from "../../ChatHomePage.jsx"
import GameInventationWin from './gameInventationWin.jsx';


const Chatbox = ({currentChat,sendMessage,userMsg,setUserMsg}) => {
    const currentUserObject = useContext(Context)   
    const [chatName, setChatName] = useState()
    const [openGameInventation, setOpenGameInventation] = useState(false)

    useEffect(() => {
        if (currentChat) {
            setChatName(currentChat.isGroup ? currentChat.chatRoomName : nameFinder());
        }
    }, [currentChat, currentUserObject]);
    
    const submitHandler = (event) =>{
        event.preventDefault();
        sendMessage();
    }

    const nameFinder = () => {
        const user = currentChat.Participants.find(user => user.id != currentUserObject.id);
        return user ? user.userName : null;
    };

    const gameInvetaionHandler = () =>{
        // לשלוח אמיט על
        alert('game pressed')
    }
    const gameInvetaionWinHandler =()=>{
        setOpenGameInventation(openGameInventation?false:true)
    }
     
    
    return (
        <div className='chatbox'>
            <header>
                <h1>{chatName || "defult"}</h1>
            </header>
            <section>
                <main>
                    {currentChat && currentChat.messagesList.map(m =>(
                            <ChatMessage key={m.messageId} messageObject={m}></ChatMessage>                        
                    ))}
                </main>
                <form className='form' onSubmit={submitHandler}>
                    <label htmlFor='inputMsg' ></label>
                    <input 
                        id='inputMsg' 
                        type="text"
                        value={userMsg}
                        placeholder='enter your message'
                        onChange={(e)=> {
                            setUserMsg(e.target.value)
                        }}/>
                    
                    <button type='button' onClick={gameInvetaionWinHandler}>🎲</button>
                    <button type='submit'>✨</button>
                </form>                   
            {openGameInventation && <GameInventationWin method={gameInvetaionHandler}></GameInventationWin>}
            </section>
            {/* {openGaneInventation? <gameInventationWin></gameInventationWin>:''} */}
        </div>
    )
}
export default Chatbox
