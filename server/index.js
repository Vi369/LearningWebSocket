import express from "express";
import {WebSocketServer} from "ws"

const PORT = 8080;
const app = express()


const server = app.listen(PORT, ()=>{
    console.log(`server is listing at ${PORT}`)
})

// web socket server 

const wss = new WebSocketServer ({server})

// connection event 
wss.on("connection", (ws)=>{
    // this is another event if receive data
    ws.on("message", (cleintSideData)=>{
        console.log("data from client:%s", cleintSideData)
        // responce to server 
        ws.send("yup buddy!! i know you asking something")
    })
})
