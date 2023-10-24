import Header from './Header'
import useFetchUpcomingMovies from '../hooks/useFetchUpcomingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useFetchPopularMovies from '../hooks/useFetchPopularMovies'
import useFetchTopRatedMovies from '../hooks/useFetchTopRatedMovies'
import useFetchNowPlayingMovies from '../hooks/useFetchNowPlayingMovies'

const Browse = () => {
  useFetchUpcomingMovies()
  useFetchPopularMovies()
  useFetchTopRatedMovies()
  useFetchNowPlayingMovies()

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse