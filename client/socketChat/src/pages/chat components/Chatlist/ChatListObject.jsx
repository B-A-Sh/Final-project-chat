/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
import { Context } from "../../HomePage"

const ChatListObject = ({chat}) => {
  const userObject = useContext(Context)
  const [isGroup, setisGroup] = useState(false)
  const [chatImage, setChatImage] = useState();
  const [chatTitle, setChatTitle] = useState();
  const [firstMsg, setFirstMsg] = useState(chat.messaagesList[(chat?.messaagesList.length-1)])
    
  
  

  // const [chat, setChat] = useState(props.chat)
  return (
    <div className="ChatListObject">
      <img src={userObject.userAvatar}></img>
      <div>
        <h6>chat name</h6>
        {/* <p>chat summery</p> */}
        <p>chat summery Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, veniam! </p>
      </div>
    </div>  )
}

export default ChatListObject