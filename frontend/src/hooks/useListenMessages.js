import React from 'react'
import { useSocketContext } from '../context/SocketContent';
import { useConversation } from '../store/useConversation';
import { useEffect } from 'react';
import notificationssound from "../assets/sounds/frontend_src_assets_sounds_notification.mp3"


const useListenMessages = () => {
  
    const {socket} = useSocketContext();
    const {messages,setMessages} = useConversation()

    useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
   newMessage.shouldShake = true
   const sounds = new Audio(notificationssound);
   sounds.play()
   setMessages([...messages,newMessage])

    })
   return()=> socket?.off("newMessage")
    },[socket,messages,setMessages])
}

export default useListenMessages