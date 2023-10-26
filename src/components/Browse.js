import Header from './Header'
import useFetchUpcomingMovies from '../hooks/useFetchUpcomingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useFetchPopularMovies from '../hooks/useFetchPopularMovies'
import useFetchTopRatedMovies from '../hooks/useFetchTopRatedMovies'
import useFetchNowPlayingMovies from '../hooks/useFetchNowPlayingMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  const gptView = useSelector(store => store.gpt.viewGpt)
  useFetchUpcomingMovies()
  useFetchPopularMovies()
  useFetchTopRatedMovies()
  useFetchNowPlayingMovies()

  return (
    <div>
      <Header/>
      {gptView ? <GptSearch/> : 
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      }
    </div>
  )
}

export default Browse