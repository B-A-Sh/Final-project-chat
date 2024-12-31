import { useState } from "react"
import ChatListObject from "./ChatListObject"

const ChatList = () => {

    const [ChatList, setChatList] = useState([{
        messaagesList:[],
        Participants:[
            {
                id : Date.now(),
                userName:"Bar-amos",
                userAvatar: '../src/assets/men logo.png',
                email:'boby@gmail.com',
                isFemale:'false'
            },
            {
                id : Date.now(),
                userName:"Adele",
                userAvatar: '../src/assets/women logo.png',
                email:'adele@gmail.com',
                isFemale:'true'
            }
        ]
    }])
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