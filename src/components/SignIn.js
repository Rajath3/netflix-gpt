import React, {useRef, useState} from 'react'
import { validateForm } from '../utils/validate'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase'


const SignIn = ({isSignIn, toggleSignIn}) => {
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = () => {
    const name = !SignIn ? fullName?.current?.value : 'Random'
    
    const message = validateForm(email?.current?.value, password?.current?.value, name)

    setErrorMessage(message)

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value).then((userCredential) => {
        console.log(userCredential.user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage)
    });
    } else {
      signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value).then((userCredential) => {
        console.log(userCredential.user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage)
  });
    }
  }
  
  const signInType = isSignIn ? 'Sign In': 'Sign Up'

  const email = useRef(null);
  const fullName = useRef(null);
  const password = useRef(null);

  return (
    <div className='bg-black absolute mr-[30rem] ml-[34rem] mt-48 p-[4rem] bg-opacity-90 text-white '>
        <h1 className='px-16 mb-8 text-4xl'>{signInType}</h1>
        <form onSubmit={(e) => e.preventDefault()}>
            {!isSignIn && <input type='text' placeholder='Full Name' ref={fullName}className='p-4 mx-16 my-2 w-8/12 bg-gray-500'/>}
            <input type='email' placeholder='Email Address' ref={email} className='p-4 mx-16 my-2 w-8/12 bg-gray-500'/>
            <input type='password' placeholder='Password' ref={password} className='p-4 mx-16 my-2 w-8/12 bg-gray-500'/>
    
            <p className='text-red-600 mx-16 mt-4'>{errorMessage}</p>

            <button className='bg-red-700 p-4 mx-16 mt-8 w-8/12' onClick={() => handleSubmit()}>{signInType}</button>
        </form>
        <p className='text-white mx-16 mt-6' onClick={() => toggleSignIn()}>{isSignIn ? 'New to Netflix? Sign Up' : 'Registered User? Login'}</p>
    </div>
  )
}

export default SignIn