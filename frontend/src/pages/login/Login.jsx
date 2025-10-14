import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {

const[username,setUsername] = useState("");
const [password,setPassword] = useState("");

const{loading,login} = useLogin()


 async function handleSubmit(e){

 e.preventDefault();
 await login(username,password)




}

    return (
        <div className='flex flex-col justify-center items-center min-w-80 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-lg bg-gray-900  '>
                <h1 className='text-3xl font-semibold text-center text-[#ffffff]'>
                    Login
                    <span className='text-green-700 font-semibold'> Insta-Connect</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-[#ffffff] label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-18' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>

                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-[#ffffff] label-text'>Password</span>
                        </label>
                        <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-18' value={password} 
                        onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>

                    <Link to="/signup" className='text-sm text-[#ffffff] hover:underline hover:text-green-700 mt-2 inline-block'>

                        "Dont" have an Account ? Click here
                    </Link>

                    <div>
                    
                    <button className='btn btn-block btn-md mt-4'disabled ={loading}>
                        {loading? <span className='loading loading-spinner bg-gray-700'></span>: "Login"}
                    </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login