import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const [isSigninForm, setIsSigninFOrm] = useState(true);

  const toggleSigninForm = () => {
    setIsSigninFOrm(!isSigninForm)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg' />
      </div>
      <form className='w-3/12 absolute px-12 bg-black m-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSigninForm ? 'Sign IN' : 'Sign Up'}</h1>
        {!isSigninForm && <input type='text' placeholder='Enter your full name' className='p-4 my-4 w-full bg-gray-700' />}
        <input type='text' placeholder='Enter your email' className='p-4 my-4 w-full bg-gray-700' />
        <input type='password' placeholder='Enter your password' className='p-4 my-4 w-full  bg-gray-700' />
        <button type='submit' className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSigninForm ? 'Sign IN' : 'Sign Up'}</button>
        <p className='pb-[30px] cursor-pointer' onClick={toggleSigninForm}>{isSigninForm ? 'New to Netflix? Sign Up Now' : 'Already Registered ? Sign IN Now'}</p>
      </form>
    </div>
  )
}

export default Login