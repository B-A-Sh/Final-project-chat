/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import ChatListObject from "./ChatListObject"


const ChatList = ({currentChat,enetrChat,chatList}) => {
    
    return (
    <div className="chatList">
        <header >
            <h5>Chat list</h5>
        </header>
        <main>
            {chatList.map((c)=>(
                <ChatListObject 
                    key={c.chatId} 
                    chat={c} 
                    enetrChat={enetrChat}
                    currentChat={currentChat}
                    >
                </ChatListObject>
            ))}
        </main>
    </div>
  )
}

export default ChatList