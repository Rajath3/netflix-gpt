import React from 'react'
import VideoCard from './VideoCard'

const VideoList = ({title, movies}) => {
  return (
    <div className='overflow-x-hidden hover:overflow-x-scroll'>
        <h1 className='text-2xl my-4 mx-4'>{title}</h1>
        <div className='flex'>
            <div className='flex'>
                {movies?.map((movie) => <VideoCard key={movie.id} data={movie}/>)}
            </div>
        </div>
    </div>
  )
}

export default VideoList