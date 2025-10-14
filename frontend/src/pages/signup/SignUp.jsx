import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import { useSignup } from '../../hooks/useSignup'


const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''

  })


  function handleCheckboxChange(gender){

    setInputs({...inputs,gender:gender})
  }

const{loading,signup} = useSignup()

 async function handleSubmit(e) {
    e.preventDefault()
    signup(inputs)
    console.log(inputs)
   
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-80 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-lg bg-gray-900  '>
        <h1 className='text-3xl font-semibold text-center text-[#ffffff]'>
          Sign Up
          <span className='text-green-700 font-semibold'> Insta-Connect</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-[#ffffff] label-text'>Full Name</span>
            </label>
            <input type="text" placeholder='Enter Fullname' className='w-full input input-bordered h-18' value={inputs.fullName}

              onChange={(e) => { setInputs({ ...inputs, fullName: e.target.value }) }}
            />

          </div>
          <div>
            <label className='label p-2'>
              <span className='text-[#ffffff] label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-18' value={inputs.username}

              onChange={(e) => { setInputs({ ...inputs, username: e.target.value }) }}
            />

          </div>

          <div>
            <label className='label p-2'>
              <span className='text-[#ffffff] label-text'>Password</span>
            </label>
            <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-18' value={inputs.password}

              onChange={(e) => { setInputs({ ...inputs, password: e.target.value }) }}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-[#ffffff] label-text'>Confirm Password</span>
            </label>
            <input type="text" placeholder='Confirm your Password' className='w-full input input-bordered h-18' value={inputs.confirmPassword}

              onChange={(e) => { setInputs({ ...inputs, confirmPassword: e.target.value }) }}
            />
          </div>
          <GenderCheckbox  handleCheckboxChange={handleCheckboxChange} selectGender={inputs.gender}/>
          <Link to="/login" className='text-sm text-[#ffffff] hover:underline hover:text-green-700 mt-2 inline-block'>
            Already have an Account? Click here
          </Link>

          <div>

            <button className='btn btn-block btn-md mt-4' disabled = {loading}>
              { loading? <span className='loading loading-spinner bg-gray-700'></span>: "Sign Up"}
            </button>

          </div>
        </form>
      </div>

    </div>
  )
}

export default SignUp