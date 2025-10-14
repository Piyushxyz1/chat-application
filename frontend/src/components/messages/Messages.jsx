import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import { useRef } from 'react';
import { useEffect } from 'react';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {

  const {loading,messages} = useGetMessages();

  useListenMessages()
  const lastmessageRef = useRef();

  useEffect(()=>{

    setTimeout(()=>{

      lastmessageRef.current?.scrollIntoView({behavior:"smooth"})

    },100)


  },[messages])
  return (
    <div className='px-4 flex-1 overflow-auto'>
{!loading && messages.length > 0 && messages.map((message) => (
  <div key={message._id} ref={lastmessageRef}>
    
  <Message  message={message} />  
    
  </div>
  
))}

    
      {loading && [...Array(3)].map((_,idx)=> <MessageSkeleton key={idx}/>)} 

      {!loading && messages.length === 0 &&(<div> <p className='text-gray-400 text-center'>send a message to start a conversation</p>  </div>)} 


    </div>
  )
}

export default Messages