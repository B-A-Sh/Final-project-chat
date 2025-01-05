import express from "express";
import cors from 'cors';
import http from 'http'
import { Server } from "socket.io";
 
const messagesHistory = [];
const PORT = 8080;
const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:'*'
})

//הסוקט למעשה זה מה הפרטים של המשתמש שהתחבר
io.on("connection",(socket) => {
    console.log(`user connected in socket number ${socket.id}`);
    socket.on("sendMessage",(message,room)=> {
        const messageObject = {
            userObject: message.currentUserObject,
            messageId: Date.now(),
            timeSent: new Date(Date.now()).toLocaleTimeString('en-US',{
                hour: '2-digit',
                minute: '2-digit',
                hour12: false}),
            content:message.userMsg
        }
        if(room){
            socket.to(room).emit("receivePrivateMessage",messageObject)
        }else{
            io.emit("receiveMessage",messageObject)
            // socket.broadcast.emit("receiveMessage",messageObject)
        }
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
