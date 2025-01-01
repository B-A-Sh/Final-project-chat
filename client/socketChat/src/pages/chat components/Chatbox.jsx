/* eslint-disable react/prop-types */
// import { useState } from 'react'
// import './style.css'
import './finalStyle.css'
import ChatMessage from './ChatMessage.jsx';


const Chatbox = ({messages,sendMessagesToEveryone,userMsg,setUserMsg}) => {

    const sendMessage = (event) =>{
        event.preventDefault();
        sendMessagesToEveryone();
    }
    
    return (
        <div className='chatbox'>
            <header>
                <h1>start of chat box</h1>
            </header>
            <section>
                <main>
                    {messages && messages.map(m =>(
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
                    <button type='submit'>✨</button>
                </form>                   
            </section>
        </div>
    )
}
export default Chatbox