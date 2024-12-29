/* eslint-disable react/prop-types */
import React, { useState } from 'react'
// import './style.css'
import './finalStyle.css'
import Card from 'react-bootstrap/Card';
import ChatMessage from '../chat components/chatMessage.jsx';


// eslint-disable-next-line react/prop-types
const Chatbox = ({messages,sendMessagesToEveryone,userMsg,setUserMsg}) => {
	// const [messages, setMessages] = useState(props.messages)

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
                    <title className=''>chat title</title>
                    <div id='messagesBoard'>
                        {messages && messages.map(m =>(
                            <div className='' key={m.id}>
                                <ChatMessage className='message sent' messageObject={m} ></ChatMessage>
                                <img src={m.avatar} alt="avatar" className='chatApp__convMessageAvatar' />    
                                <Card  className='' border="primary" style={{ width: '16rem' }}>
                                    <Card.Header className='chatApp__convMessageValue'>{m.userName} </Card.Header>
                                    <Card.Text className=''>
                                        {m.content}
                                    </Card.Text>
                                </Card>
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





)}

export default Chatbox

	// <section id="chatApp" className="chatApp">
	// <div className="chatApp__loaderWrapper">
	// 	<div className="chatApp__loaderText">Loading...</div>
	// 	<div className="chatApp__loader"></div>
	// </div>
	// </section>