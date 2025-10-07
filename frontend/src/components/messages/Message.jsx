import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
      />
            </div>
        </div>
        <div className="chat-bubble text-[#000]">Hey, How is it going</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-[#ffffff]">Seen at 12:46</div>

    </div>
  )
}

export default Message