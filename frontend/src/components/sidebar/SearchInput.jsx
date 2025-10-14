import React from 'react'
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useConversation } from '../../store/useConversation';
import toast from 'react-hot-toast';
import useGetConversation from '../../hooks/useGetConversation';



const SearchInput = () => {
const [search,setSearch] = useState('');
const  {setSelectedConversation} = useConversation();
const {conversations} = useGetConversation()


const handleSubmit =(e)=>{

e.preventDefault();
if(!search) return;
const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
if(conversation){

setSelectedConversation(conversation)
setSearch('')
} 
else{
  toast.error("no user found")
}

}



  return (
    
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
     <input type = "text" placeholder='Search' className='input input-bordered rounded-full' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      <button type = "submit" className='btn btn-circle bg-green-700 text-white'>
        <BsSearch className='w-4 h-4 outline-none'/>
      </button>
    </form>
    
  )
}

export default SearchInput