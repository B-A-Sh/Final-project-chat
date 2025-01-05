import React, { useEffect, useMemo, useState } from 'react'
import { socket } from '../utils/socket';
import Chatbox from './chat components/Chatbox/Chatbox.jsx';
import ChatList from './chat components/Chatlist/ChatList.jsx';
import chatDB from "../assets/Mockedchats.js"
import EmptyChatBox from './chat components/Chatbox/EmptyChatBox.jsx';
export const Context = React.createContext();

const chat = {
  messaagesList:[],
  Participants:[
      {
          id : "0544463378",
          userName:"Bar-amos",
          userAvatar: '../src/assets/men logo.png',
          email:'boby@gmail.com',
          isFemale:'false'
      },
      {
          id : 22,
          userName:"Adele",
          userAvatar: '../src/assets/women logo.png',
          email:'adele@gmail.com',
          isFemale:'true'
      }
  ]
}
const HomePage = () => {
  const [messages, setMessages] = useState([]);
  const [userMsg, setUserMsg] = useState('');
  const [currentChat, setCurrentChat] = useState();
  // const [currentChat, setCurrentChat] = useState(chatDB[0]);
  // const [currentChat, setCurrentChat] = useState(chat);
  const [chatList, setChatList] = useState(chatDB)
  const [currentUserObject, setCurrentUserObject] = useState(
      {
      id : Date.now(),
      userName:"Bar-amos",
      userAvatar: '../src/assets/men logo.png',
      email:'boby@gmail.com',
      isFemale:'false'
    });

    useEffect(() => {
      const handleReceiveMessage = (msg)=>{
        setCurrentChat((prevChat) => ({
          ...prevChat,
          messaagesList: [msg,...prevChat.messaagesList],
        }));
      }
      socket.on("receiveMessage",handleReceiveMessage)
      return () => {
        socket.off("receiveMessage", handleReceiveMessage);
      };
    }, [])
    
    const selectChatHandler = (chatId)=>{
      if(!chatId)
        setCurrentChat()
      if(currentChat){
        const tempIndex = chatList.findIndex((c)=> c.chatId===currentChat.chatId)
        chatList[tempIndex] = currentChat;
      }
      const chat = chatList.find((c)=> c.chatId===chatId)
      setCurrentChat(chat)
    }
    
    const sendMessagesToEveryone = () =>{
      if(userMsg){
            const message = {currentUserObject,userMsg}
            socket.emit("sendMessagesToEveryone",message)            
            setUserMsg("")
          }
    }
    return (
      <Context.Provider value={currentUserObject}>
        <div className='mainChatPage'>
          <div>
            {currentChat? 
              <Chatbox currentChat={currentChat} 
                        sendMessagesToEveryone={sendMessagesToEveryone}
                        setUserMsg={setUserMsg}
                        userMsg={userMsg}>
                </Chatbox>
              : <EmptyChatBox></EmptyChatBox> }
          </div>
          <>
            <ChatList enetrChat={selectChatHandler} currentChat={currentChat} chatList={chatList} ></ChatList>
          </>
        </div>
      </Context.Provider>
  )
}
export default HomePage
