/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
import { Context } from "../../HomePage"

const ChatListObject = ({enetrChat,currentChat,chat}) => {
  const currentUserObject = useContext(Context)
  const [chatImage, setChatImage] = useState();
  const [chatTitle, setChatTitle] = useState();
  // const [firstMsg, setFirstMsg] = useState(chat.messagesList[(chat?.messagesList.length-1)])
  const [firstMsg, setFirstMsg] = useState()
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    setChatImage(!chat.isGroup ? avatarFinder():'../src/assets/group image.png')
    setChatTitle(!chat.isGroup ? nameFinder(): 'Group chat')
    setSelected(currentChat && currentChat.chatId===chat.chatId)
    // setFirstMsg(chat.messagesList[(chat.messagesList.length-1)])
    setFirstMsg(currentChat?.messagesList.length>0 ? currentChat?.messagesList?.[currentChat.messagesList.length - 1] : null);
    alert(firstMsg)
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
    <div className={`${selected? 'chatSelected':''} ChatListObject`} onClick={clickHandler}>
      <img src={chatImage} alt="chat image"></img>
      <div>
        <h6>{chatTitle}</h6>
        <p>{firstMsg || 'Empty chat'} </p>
      </div>
    </div>  )
}

export default ChatListObject