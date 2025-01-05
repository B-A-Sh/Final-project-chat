/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
import { Context } from "../../HomePage"

const ChatListObject = ({enetrChat,currentChat,chat}) => {
  const currentUserObject = useContext(Context)
  const [chatImage, setChatImage] = useState();
  const [chatTitle, setChatTitle] = useState();
  const [firstMsg, setFirstMsg] = useState(chat.messaagesList[(chat?.messaagesList.length-1)])
  const [selected, setselected] = useState(false);
  
  useEffect(() => {
    setChatImage(!chat.isGroup ? avatarFinder():'../../../assets/group image.jpeg')
    setChatTitle(!chat.isGroup ? nameFinder(): chat.chatRoomName)
    setselected(currentChat && currentChat.chatId===chat.chatId)
  }, [currentChat])


  const clickHandler = ()=>{
    if(selected)
      enetrChat()
    else
      enetrChat(chat.chatId)
  }
  const avatarFinder = ()=>{
    const user = chat.Participants.find(user => user.id !== currentUserObject.id);
    return user ? user.userAvatar : null;
  };
  const nameFinder = () => {
    const user = chat.Participants.find(user => user.id !== currentUserObject.id);
    return user ? user.userName : null;
  };
  

  return (
    // <div className= '${className} ChatListObject'>
    <div className={`${selected? 'chatSelected':''} ChatListObject`} onClick={clickHandler}>
      <img src={currentUserObject.userAvatar} alt="chat image"></img>
      <div>
        <h6>{chatTitle}</h6>
        <p>{firstMsg || 'Empty chat'} </p>
      </div>
    </div>  )
}

export default ChatListObject