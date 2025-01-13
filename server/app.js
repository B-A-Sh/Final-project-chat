import express from "express";
import cors from 'cors';
import http from 'http'
import { Server } from "socket.io";
import mongoose from "mongoose";
import { join } from "path";
import { chatSocketHandler } from "./sockets/chatSocketHandler.js";

const messagesHistory = [];
let PORT = 8080;
PORT = 8080;
const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:'*'
})

io.on("connection",(socket) => {
    console.log(`user connected in socket number ${socket.id}`);

    chatSocketHandler(io,socket)    
})


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


server.listen(PORT,
    ()=>{
        console.log(`Listening in port ${PORT}`);
    }
)

// mongoose.connect('').then(() => {
  
//     emit('send user',)
// })

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
