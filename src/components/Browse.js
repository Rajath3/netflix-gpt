import Header from './Header'
import useFetchUpcomingMovies from '../hooks/useFetchUpcomingMovies'

const Browse = () => {
  useFetchUpcomingMovies()
  
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse