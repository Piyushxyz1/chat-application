import React from 'react'

const Conversation = () => {
    return (
        <>
            <div className='flex gap-2 items-center hover:bg-green-500 rounded p-2  mb-2 py-1 cursor-pointer'>
                <div className="avatar avatar-online">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" alt='user-avatar' />
                    </div>
                </div>
                 <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-[#ffffff]'>John Doe</p>
                        <span className='text-xl'>🧑‍🦰</span>
                    </div>
                 </div>
            </div>
            <div className=' my-0 py-0 h-[0.5px] bg-white'></div>
        </>
    )
}

export default Conversation