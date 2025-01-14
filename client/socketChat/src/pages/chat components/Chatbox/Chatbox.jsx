/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'
// import '../chatStyle.css'
import ChatMessage from './chatMessage.jsx';
import { Context } from "../../ChatHomePage.jsx"
import GameInvitationWin from './GameInvitationWin.jsx';
import { socket } from '../../../utils/socket.js';
import { useNavigate } from 'react-router-dom';


const Chatbox = ({currentChat,sendMessage,userMsg,setUserMsg}) => {
    const navigate = useNavigate();
    const currentUserObject = useContext(Context)   
    const [chatName, setChatName] = useState()
    const [openGameInvitation, setOpenGameInvitation] = useState(false)

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


    const gameInvitationHandler = (e) => {
        const gameName = e.target.id;
        socket.emit('start-game', gameName);
        // const navigate = useNavigate();
        navigate(`/game/${gameName}`,{state: {currentUserObject,currentChat }  });
    };
    const gameInvitationWinHandler =()=>{
        setOpenGameInvitation(openGameInvitation?false:true)
    }
     
    
    return (
        <div className='chatbox'>
            <header>
                <h1>{chatName || "default"}</h1>
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
                    
                    <button type='button' onClick={gameInvitationWinHandler}>🎲</button>
                    <button type='submit'>✨</button>
                </form>                   
            {openGameInvitation && <GameInvitationWin method={gameInvitationHandler}></GameInvitationWin>}
            </section>
            {/* {openGameInVitation? <gameInvitationWin></gameInvitationWin>:''} */}
        </div>
    )
}
export default Chatbox
