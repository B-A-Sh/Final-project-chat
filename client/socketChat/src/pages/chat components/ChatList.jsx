import { useEffect, useState } from "react"
import ChatListObject from "./ChatListObject"
import { chatDB } from "../../assets/Mockedchats"

const ChatList = () => {
    const [ChatList, setChatList] = useState(chatDB)
    useEffect(() => {
    }, [])
    
    return (
    <div className="chatList">
        <header >
            <h5>Chat list</h5>
        </header>
        <main>
            {ChatList.map((c)=>(
                <ChatListObject key={Date.now()} chat={c}></ChatListObject>
            ))}
        </main>
    </div>
  )
}

export default ChatList