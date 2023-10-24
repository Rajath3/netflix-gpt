import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/secret";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { MOVIES_UPCOMING_URL } from "../utils/constants";

const useFetchUpcomingMovies = () => {
  const dispath = useDispatch();

  const fetchUpcomingMovies = async () => {
    const data = await fetch(MOVIES_UPCOMING_URL, API_OPTIONS);
    const json = await data.json()
    dispath(addUpcomingMovies(json.results));
  }

  useEffect( ()=> {
    fetchUpcomingMovies()
  }, [])
}

export default useFetchUpcomingMovies;