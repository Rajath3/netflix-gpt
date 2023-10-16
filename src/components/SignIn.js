import React from 'react'

const SignIn = ({isSignIn, toggleSignIn}) => {

  const signInType = isSignIn ? 'Sign In': 'Sign Up'

  return (
    <div className='bg-black absolute mr-[30rem] ml-[34rem] mt-48 p-[4rem] bg-opacity-90 text-white '>
        <h1 className='px-16 mb-8 text-4xl'>{signInType}</h1>
        <form>
            {!isSignIn && <input type='text' placeholder='Full Name' className='p-4 mx-16 my-2 w-8/12 bg-gray-500'/>}
            <input type='email' placeholder='Email Address' className='p-4 mx-16 my-2 w-8/12 bg-gray-500'/>
            <input type='password' placeholder='Password' className='p-4 mx-16 my-2 w-8/12 bg-gray-500'/>
            <button className='bg-red-700 p-4 mx-16 mt-8 w-8/12'>{signInType}</button>
        </form>
        <p className='text-white mx-16 mt-6' onClick={() => toggleSignIn()}>{isSignIn ? 'New to Netflix? Sign Up' : 'Registered User? Login'}</p>
    </div>
  )
}

export default SignIn