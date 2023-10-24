import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movies = useSelector(store => store.movie?.nowPlaying)

  if (!movies) return;
  
  const mainMovie = movies[0]

  const {original_title, overview, id} = mainMovie;

  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground videoId={id}/>
    </div>
  )
}

export default MainContainer