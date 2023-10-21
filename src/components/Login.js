import React, { useState } from 'react'
import Header from './Header'
import SignIn from './SignIn'
import { BG_IMG } from '../utils/constants';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn)
  }
  return (
    <div>
      <Header/>
      <div className='absolute bg-blend-color-burn'>
        <img src={BG_IMG} alt='logo'/>
      </div>
      <SignIn isSignIn={isSignIn} toggleSignIn={toggleSignIn}/>
    </div>
  )
}

export default Login