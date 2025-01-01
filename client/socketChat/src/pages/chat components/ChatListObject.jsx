/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
import { Context } from "../HomePage"

const ChatListObject = ({chat}) => {
  const userObject = useContext(Context)
  const [isGroup, setisGroup] = useState(false)
  const [chatImage, setChatImage] = useState();
  const [chatTitle, setChatTitle] = useState();
  const [firstMsg, setFirstMsg] = useState(chat.messaagesList[(chat?.messaagesList.length-1)])
    

  useEffect(() => {
    if(chat?.Participants?.length >2){
    setisGroup(true)
    }

  }, [])
  
  console.log("arr",chat.Participants)

  console.log(chat);
  
  console.log(`the chat object is: ${chat}`);
  console.log(isGroup);
  console.log(firstMsg);
  
  
  

  // const [chat, setChat] = useState(props.chat)
  return (
    <div className="ChatListObject">
      <img src={userObject.userAvatar}></img>
      <div>
        <h6>chat name</h6>
        <p>chat summery</p>
        <p>chat summery Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, veniam! </p>
      </div>
    </div>  )
}

export default ChatListObject