import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-80 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-lg bg-gray-900  '>
        <h1 className='text-3xl font-semibold text-center text-[#ffffff]'>
          Sign Up
          <span className='text-green-700 font-semibold'> Insta-Connect</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className='text-[#ffffff] label-text'>Full Name</span>
            </label>
            <input type="text" placeholder='Enter Fullname' className='w-full input input-bordered h-18' />

          </div>
          <div>
            <label className='label p-2'>
              <span className='text-[#ffffff] label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-18' />

          </div>

          <div>
            <label className='label p-2'>
              <span className='text-[#ffffff] label-text'>Password</span>
            </label>
            <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-18' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-[#ffffff] label-text'>Confirm Password</span>
            </label>
            <input type="text" placeholder='Confirm your Password' className='w-full input input-bordered h-18' />
          </div>
           <GenderCheckbox/>
          <a href="#" className='text-sm text-[#ffffff] hover:underline hover:text-green-700 mt-2 inline-block'>
            Already have an Account? Click here
          </a>

          <div>

            <button className='btn btn-block btn-md mt-4'>Sign Up</button>

          </div>
        </form>
      </div>

    </div>
  )
}

export default SignUp