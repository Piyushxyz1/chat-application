import React from 'react'
import { BsSearch } from 'react-icons/bs';
const SearchInput = () => {
  return (
    
    <form className='flex items-center gap-2'>
     <input type = "text" placeholder='Search' className='input input-bordered rounded-full'/>
      <button type = "submit" className='btn btn-circle bg-green-700 text-white'>
        <BsSearch className='w-4 h-4 outline-none'/>
      </button>
    </form>
    
  )
}

export default SearchInput