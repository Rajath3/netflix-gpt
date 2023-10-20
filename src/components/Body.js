import React, { useEffect } from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux';

const Body = () => {
  const dispatch = useDispatch()

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, displayName, email, photoURL } = user;
        dispatch(addUser({uid: uid, displayName: displayName, email: email, photoURL: photoURL}));
      } else {
        dispatch(removeUser());
      }
    });
  }, [])

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/browse',
      element: <Browse/>
    }
  ])
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body