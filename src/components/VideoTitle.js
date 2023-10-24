import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-48 px-16 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold mt-4'>{title}</h1>
        <p className='w-1/4 pt-4 text-lg'>{overview}</p>
        <div className='mt-4'>
            <button className='w-36 p-4 bg-white text-black text-lg hover:bg-gray-400'>▶ Play</button>
            <button className='mx-2 w-36 p-4 bg-gray-600 text-white text-lg opacity-70'> ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle