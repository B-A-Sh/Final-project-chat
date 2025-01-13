import express from "express";
import cors from 'cors';
import http from 'http'
import { Server } from "socket.io";
import mongoose from "mongoose";
import { join } from "path";
import { chatSocketHandler } from "./sockets/chatSocketHandler.js";
import { socketGame_RPSHandler,stopGame_RPS,roomUsersReset } from './sockets/Socket-game-RPS.js';



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
    // socket.on('start-game',game_RPS.startGame)
    socket.on('start-game',(game_number)=>{
        if(game_number === 'RPS'){
            console.log('RPS game handler started');
            socketGame_RPSHandler(io,socket)
        }else if(game_number === 'memory'){
            console.log('memory game handler started');
            console.log('memory game');
        }
    })
    socket.on('leave-game', (gameName) => {
        if (gameName === 'RPS') {
            console.log('RPS game handler stopped');
            stopGame_RPS(); 
        } else if (gameName === 'memory') {
            console.log('Memory game handler stopped');
        //   stopGame_memory();
        }
      });
  
    
    
    socket.on("disconnect",()=>{
        console.log("user disconnected");
        roomUsersReset(socket)
    })

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
