import React from 'react'
import { BG_IMG } from '../utils/constants'

const GptSearchBar = () => {
  return (
    <div className='flex justify-center'>
        <div className='absolute bg-blend-color-burn -z-20 opacity-90'>
            <img src={BG_IMG} alt='logo'/>
        </div>
        <form className='pt-[10%] grid grid-cols-12 '>
            <input type="text" placeholder='what would you like to watch?' 
            className='px-4 py-4 m-2 col-span-9 rounded-lg'/>
            <button className='bg-red-900 px-8 cols-span-3 rounded-lg text-white'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar