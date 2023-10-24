import React from 'react'
import VideoList from './VideoList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movie)

  return (
    <div>
        <div className='bg-black text-white'>
            <div className='-my-56 relative z-10'>
              <VideoList title={"Now Playing"} movies={movies?.nowPlaying}/>
              <VideoList title={"Trending"} movies={movies?.nowPlaying}/>
              <VideoList title={"Comedy"} movies={movies?.nowPlaying}/>
            </div>
        </div>
    </div>
  )
}

export default SecondaryContainer