import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'
import { getRandomEmoji } from '../utils/emoji'

const Conversations = () => {
 
  const{loading,conversations} = useGetConversation()
  
  return (
    <div className='flex flex-col overflow-auto'>

     {
      conversations.map((conversation,idx)=>{

     return   <Conversation  key={conversation._id} conversation = {conversation} emoji = {getRandomEmoji()}
        
        idx = {idx === conversations.length - 1}/>   

      })
     } 
    
    </div>
  )
}

export default Conversations