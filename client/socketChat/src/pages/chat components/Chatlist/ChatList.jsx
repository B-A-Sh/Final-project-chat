/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import ChatListObject from "./ChatListObject"


const ChatList = ({chatList}) => {

    // useEffect(() => {
    //     // setChatList(chatDB)
    // }, [])
    
    return (
    <div className="chatList">
        <header >
            <h5>Chat list</h5>
        </header>
        <main>
            {chatList.map((c)=>(
                <ChatListObject key={c.chatId} chat={c}></ChatListObject>
            ))}
        </main>
    </div>
  )
}

export default ChatList