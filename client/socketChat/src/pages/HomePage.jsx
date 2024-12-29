import { useEffect, useState } from 'react'
import { socket } from '../utils/socket';
import Chatbox from './Chatbox/Chatbox';


const HomePage = () => {
    const [messages, setMessages] = useState([]);
    const [userMsg, setUserMsg] = useState('');
    const [avatar, setAvatar] = useState('../src/assets/men logo.png')
    const [userName, setuserName] = useState("Bar amos")
    const [otherName, setotherName] = useState("Adele")


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
            const message = {
                userMsg,userName,avatar
            }
            socket.emit("sendMessagesToEveryone",message)
            setUserMsg("")
            console.log(messages);
            
        }
    }

    return (
        <>
            
           <Chatbox messages={messages} 
                    sendMessagesToEveryone={sendMessagesToEveryone}
                    setUserMsg={setUserMsg}
                    userMsg={userMsg}>

            </Chatbox>

        </>
  )
}

export default HomePage