import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {

  const [message,setMessage] = useState('')
const {loading,sendMessage} = useSendMessage()


async function handleSubmit(e){
e.preventDefault()
if(!message) return
 await  sendMessage(message)
 setMessage("");


}

  return (
   <form className='px-4 my-3' onSubmit={handleSubmit}>
   <div className='w-full relative'>
    <input type = "text" placeholder='Send a message' className='border text-sm rounded-lg block w-full p-2.5 bg-[#ffffff] text-[#000]'
    value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
     <button type = "submit" className='absolute inset-y-0 flex items-center end-0  p-3'>
     <BsSend className='h-4 w-4'/>
     </button>
   </div>

   </form>
  )
}

export default MessageInput