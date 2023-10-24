import React from 'react'
import VideoList from './VideoList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movie)

  return (
    <div>
        <div className='bg-black text-white'>
            <div className='-my-56 relative z-10'>
              <VideoList title={"Upcoming"} movies={movies?.upComingMovies}/>
              <VideoList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
              <VideoList title={"Popular Movies"} movies={movies?.popularMovies}/>
              <VideoList title={"Top Rated"} movies={movies?.topRatedMovies}/>
            </div>
        </div>
    </div>
  )
}

export default SecondaryContainer