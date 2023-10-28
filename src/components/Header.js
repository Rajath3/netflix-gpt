import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES, USER } from '../utils/constants';
import { toggleViewGpt } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user);

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, displayName, email, photoURL } = user;
        dispatch(addUser({uid: uid, displayName: displayName, email: email, photoURL: photoURL}));
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
    return () => unsubscribe()
  }, [])

  const handleLogout = () => {
    signOut(auth).then(() => {}).catch((error) => {
      console.log('error' + error.message)
    });
  }

  const handleGptViewChange = () => {
    dispatch(toggleViewGpt());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        className='w-48 h-32'
        src={NETFLIX_LOGO} alt='netflix-logo'/>

        {user && <div className='flex p-4 m-4'>
          <select className='bg-black text-white p-2 m-2 rounded-lg' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.value} value={lang.value}>{lang.name}</option>)}
          </select>
          <button className='px-2 mx-2 text-white bg-blue-900 rounded-lg'
          onClick={handleGptViewChange}>GPT Search</button>
          <img 
          className='w-12 h-12'
          
          src={user ? user.photoURL : USER }alt='usericon'/>
          <button className='text-white pl-2' 
          onClick={handleLogout}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header