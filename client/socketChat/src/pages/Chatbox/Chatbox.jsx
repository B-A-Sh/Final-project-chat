/* eslint-disable react/prop-types */
import React, { useState } from 'react'
// import './style.css'
import './finalStyle.css'
import ChatMessage from '../chat components/chatMessage.jsx';



const Chatbox = ({messages,sendMessagesToEveryone,userMsg,setUserMsg}) => {
	// const [messages, setMessages] = useState(props.messages)

    const [userId, setuserId] = useState(Date.now())
    const sendMessage = (event) =>{
        event.preventDefault();
        // alert(`Form submitted with:`);
        sendMessagesToEveryone();
    }
    return (
        <div className='chatbox bborder-bold mmessage-board'>
            <header>
                <h1>start of chat box</h1>
            </header>
            <section>
                <main>
                    <div id='messagesBoard'>
                        {messages && messages.map(m =>(
                            <div className='' key={m.id}>
                                <ChatMessage messageObject={m} ></ChatMessage>
                                <br />
                            </div>
                        ))}
                    </div>
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
                        }}
                        />
                    <button type='submit'>✨</button>
                </form>                   
            </section>

        </div>
    )
}

export default Chatbox

	// <section id="chatApp" className="chatApp">
	// <div className="chatApp__loaderWrapper">
	// 	<div className="chatApp__loaderText">Loading...</div>
	// 	<div className="chatApp__loader"></div>
	// </div>
	// </section>