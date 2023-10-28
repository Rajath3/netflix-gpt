import React from 'react'
import { BG_IMG } from '../utils/constants'
import { useSelector } from 'react-redux'
import language from '../utils/options';

const GptSearchBar = () => {
  
  const lang = useSelector(store => store.config.language);

  return (
    <div className='flex justify-center'>
        <div className='absolute bg-blend-color-burn -z-20 opacity-90'>
            <img src={BG_IMG} alt='logo'/>
        </div>
        <form className='bg-black mt-[10%] pl-4 pr-2 py-2 grid grid-cols-10'>
            <input type="text" placeholder={language[lang].placeHolderText} 
            className='px-4 py-4 m-2 col-span-9 rounded-lg'/>
            <button className='bg-red-900 px-10 cols-span-1 rounded-lg text-white'>{language[lang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar