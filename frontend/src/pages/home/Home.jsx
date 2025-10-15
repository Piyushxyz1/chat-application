import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'


const Home = () => {
  return (
    <div className='flex flex-col-reverse sm:flex  sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-900'>
     <Sidebar/>
     <MessageContainer/>


    </div>
  )
}

export default Home