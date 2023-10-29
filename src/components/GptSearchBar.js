import React, { useRef } from 'react'
import { BG_IMG } from '../utils/constants'
import { useSelector } from 'react-redux'
import language from '../utils/options';
import { openai } from '../utils/secret';

const GptSearchBar = () => {
  const lang = useSelector(store => store.config.language);

  const userInput = useRef(null);

  const handleGptSearch = (e) => {
    e.preventDefault();
    console.log(userInput?.current?.value);
    getGptResults(userInput?.current?.value)
  }

  

  const getGptResults = async (userInp) =>  {
    const prompt = 'You are a movie recommendation engine, if I give a genre/language, please return me 5 movie names(only names) comma separated. Like for example if I give hindi movies. The result should be koi mil gaya, hum tum, jawan, pathan, dil. Please donot add any other words or characters apart from movie names. Now, please give me a list for:' + userInp

    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": prompt}],
      });
    
        console.log(chatCompletion)
    }


  return (
    <div className='flex justify-center'>
        <div className='absolute bg-blend-color-burn -z-20 opacity-90'>
            <img src={BG_IMG} alt='logo'/>
        </div>
        <form className='bg-black mt-[10%] pl-4 pr-2 py-2 grid grid-cols-10' 
        onSubmit={handleGptSearch}>
            <input type="text" placeholder={language[lang].placeHolderText} 
            className='px-4 py-4 m-2 col-span-9 rounded-lg' ref={userInput}/>
            <button className='bg-red-900 px-10 cols-span-1 rounded-lg text-white'>{language[lang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar