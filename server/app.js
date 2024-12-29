import express from "express";
import cors from 'cors';
import http from 'http'
import { Server } from "socket.io";
import { log } from "console";
import { receiveMessageOnPort } from "worker_threads";
 
const PORT = 8080;
const app = express();
const messagesHistory = [];
const server = http.createServer(app);
const io = new Server(server,{
    cors:'*'
})

// ----
// io.on("connection",(socket) => {
//     console.log("user connected");
//     // console.log(socket);
    
//     socket.on("sendMessagesToEveryone",(message)=> {
//         const messageObject = {
//             id: Date.now(),
//             userName: message.userName,
//             avatar: message.avatar,
//             timeSent: Date.now(),
//             content:message.userMsg
//         }
        
//         io.emit("receiveMessage",messageObject)
//         // io.emit("receiveMessage",message)
//     })
    
// })
//----
//הסוקט למעשה זה מה הפרטים של המשתמש שהתחבר
io.on("connection",(socket) => {
    console.log("user connected");
    // console.log(socket);

    // socket.on("getMessageHistory",() =>{
    //     io.emit("sendMessageHistory",messagesHistory)
    // })
    
    socket.on("sendMessagesToEveryone",(message)=> {
        const messageObject = {
            userObject:message.userObject,
            messageId: Date.now(),
            timeSent: new Date(Date.now()).toLocaleTimeString('en-US',{
                hour: '2-digit',
                minute: '2-digit',
                hour12: false}),
            content:message.userMsg
        }
        // messagesHistory = [...messagesHistory,messageObject];
        io.emit("receiveMessage",messageObject)

        // io.emit("receiveMessage",message)
    })
    
})

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))



server.listen(PORT,
    ()=>{
        console.log(`Listening in port ${PORT}`);
    }
)
