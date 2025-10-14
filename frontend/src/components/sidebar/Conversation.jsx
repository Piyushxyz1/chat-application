import React from 'react'
import { useConversation } from '../../store/useConversation'
import { useSocketContext } from '../../context/SocketContent';

const Conversation = ({conversation,emoji,idx}) => {

    const {selectedConversation,setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === conversation._id ;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id)
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-green-700 rounded p-2  mb-2 py-1 cursor-pointer
              ${isSelected ? "bg-green-900" : ""} ` 
            }   onClick = {()=>setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic} alt='user-avatar' />
                    </div>
                </div>
                 <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-[#ffffff]'>{conversation.fullName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                 </div>
            </div>
            {!idx && <div className='divider my-0 py-0 h-[0.3px] bg-white'/>}
        </>
    )
}

export default Conversation