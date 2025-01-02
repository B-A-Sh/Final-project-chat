import React, { useEffect, useState } from 'react'
import { socket } from '../utils/socket';
import Chatbox from './chat components/Chatbox';
import ChatList from './chat components/ChatList';
import chatDB from "../assets/Mockedchats.js"


export const Context = React.createContext();
const chat = {
  messaagesList:[
    {
      serObject:{
        id : 25,
        userName:"Bar-amos",
        userAvatar: '../src/assets/men logo.png',
        email:'boby@gmail.com',
        isFemale:'false'},
      messageId:1735834876167,
      timeSent:'18:21', 
      content:'s'
  }
],
  Participants:[
      {
          id : 25,
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
    const [currentChat, setCurrentChat] = useState(chat);
    const [currentUserObject, setuserObject] = useState(
      {id : Date.now(),
      userName:"Bar-amos",
      userAvatar: '../src/assets/men logo.png',
      email:'boby@gmail.com',
      isFemale:'false'
    });
    const [chatList, setChatList] = useState(chatDB)


    const addObjectToArray = (newObject, targetArray) => {
      setCurrentChat((prevState) => ({
        ...prevState,
        [targetArray]: [...prevState[targetArray], newObject],
      }));
    };

    useEffect(() => {
      socket.on("receiveMessage", (msg)=>{
        setMessages([msg,...messages])
        chat.messaagesList.push(msg)
        // setCurrentChat(chat);
      })
    }, [messages])
    
    
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
           <Chatbox currentChat={currentChat} 
                    sendMessagesToEveryone={sendMessagesToEveryone}
                    setUserMsg={setUserMsg}
                    userMsg={userMsg}>
            </Chatbox>
          </div>
          <>
            <ChatList chatList={chatList} ></ChatList>
          </>
        </div>
      </Context.Provider>
  )
}
export default HomePage

// socket.emit("getMessageHistory")
// console.log("getMessageHistory emited");
// console.log("listening to sendMessageHistory emit)
// console.log("sendMessageHistory emit recived);
// socket.on("sendMessageHistory",(messageHistory)=>{
//   setMessages(messageHistory)
// })