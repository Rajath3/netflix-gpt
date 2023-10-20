import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';


const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user);

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      console.log('error' + error.message)
    });

  }
  console.log(user)

  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        className='w-48 h-32'
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix-logo'/>

        {user && <div className='flex p-4 m-4'>
          <img 
          className='w-12 h-12'
          
          src={user ? user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJQojzcGqO6y17GCiXa5T-Zv0V3FXkzUQNdfzWAn1-lTSzBCQV_1mWgxgsRi0k2lQICs&usqp=CAU'}alt='usericon'/>
          <button className='text-white pl-2' 
          onClick={handleLogout}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header