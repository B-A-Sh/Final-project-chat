/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import { Context } from "../HomePage"

const ChatListObject = (props) => {
  const userObject = useContext(Context)
  const [chat, setChat] = useState(props.chat)
  return (
    <>
    <div className="ChatListObject">
      {/* משיכה של התמונה מתוך אובייקט השיחה */}
      <img src={userObject.userAvatar}></img>
      <div>
        <h6>chat name</h6>
        <p>chat summery</p>
        <p>chat summery Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, veniam! </p>
      </div>
    </div>
  
  
    </>
  )
}

export default ChatListObject