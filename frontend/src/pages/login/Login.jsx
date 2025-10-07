import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col justify-center items-center min-w-80 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-lg bg-gray-900  '>
                <h1 className='text-3xl font-semibold text-center text-[#ffffff]'>
                    Login
                    <span className='text-green-700 font-semibold'> Insta-Connect</span>
                </h1>
                <form>
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

                    <a href="#" className='text-sm text-[#ffffff] hover:underline hover:text-green-700 mt-2 inline-block'>

                        "Dont" have an Account ? Click here
                    </a>

                    <div>
                    
                    <button className='btn btn-block btn-md mt-4'>Login</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login