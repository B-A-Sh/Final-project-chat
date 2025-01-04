/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
import { Context } from "../../HomePage"

const ChatListObject = ({chat}) => {
  const currentUserObject = useContext(Context)
  const [isGroup, setisGroup] = useState(false)
  const [chatImage, setChatImage] = useState();
  const [chatTitle, setChatTitle] = useState();
  const [firstMsg, setFirstMsg] = useState(chat.messaagesList[(chat?.messaagesList.length-1)])
  
  const avatarFinder = ()=>{
    const user = chat.Participants.find(user => user.id !== currentUserObject.id);
    return user ? user.userAvatar : null;
  };
  const nameFinder = () => {
    const user = chat.Participants.find(user => user.id !== currentUserObject.id);
    return user ? user.userName : null;
  };

  useEffect(() => {
    setChatImage(!chat.isGroup ? avatarFinder():'../../../assets/group image.jpeg')
    setChatTitle(!chat.isGroup ? nameFinder(): chat.chatRoomName)
  }, [])
  console.log('the first message is:');
  
  console.log(firstMsg);
  
  
  return (
    <div className="ChatListObject">
      <img src={currentUserObject.userAvatar}></img>
      <div>
        <h6>{chatTitle}</h6>
        <p>{firstMsg || 'empty chat'} </p>
      </div>
    </div>  )
}

export default ChatListObject