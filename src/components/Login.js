import React from 'react'
import Header from './Header'
import SignIn from './SignIn'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute bg-blend-color-burn'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo'/>
      </div>
      <SignIn/>
    </div>
  )
}

export default Login