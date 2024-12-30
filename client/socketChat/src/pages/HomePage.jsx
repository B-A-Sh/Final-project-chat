import { useEffect, useState } from 'react'
import { socket } from '../utils/socket';
import Chatbox from './Chatbox/Chatbox';


const HomePage = () => {
    const [messages, setMessages] = useState([]);
    const [userMsg, setUserMsg] = useState('');
    const [avatar, setAvatar] = useState('../src/assets/men logo.png')
    const [userName, setuserName] = useState("Bar amos")
    // const [otherName, setotherName] = useState("Adele")
    const [userObject, setuserObject] = useState(
      {id : Date.now(),
      userName:"Bar-amos",
      userAvatar: '../src/assets/men logo.png',
      email:'boby@gmail.com',
      isFemale:'false'
    })


    // socket.emit("getMessageHistory")
    // console.log("getMessageHistory emited");
    // console.log("listening to sendMessageHistory emit)
    // console.log("sendMessageHistory emit recived);
    // socket.on("sendMessageHistory",(messageHistory)=>{
    //   setMessages(messageHistory)
    // })
    useEffect(() => {

      socket.on("receiveMessage", (msg)=>{
        setMessages([...messages,msg])
      })
    }, [messages])
    
    
    const sendMessagesToEveryone = () =>{
        if(userMsg){
            const message = {userObject,userMsg}
            socket.emit("sendMessagesToEveryone",message)
            setUserMsg("")
        }
    }

    return (
        <>
           <Chatbox messages={messages} 
                    sendMessagesToEveryone={sendMessagesToEveryone}
                    setUserMsg={setUserMsg}
                    userMsg={userMsg}
                    userObject={userObject}>
            </Chatbox>
            
        </>
  )
}

export default HomePage