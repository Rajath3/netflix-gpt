import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/secret";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { MOVIES_POPULAR_URL } from "../utils/constants";

const useFetchPopularMovies = () => {
  const dispath = useDispatch();

  const fetchPopularMovies = async () => {
    const data = await fetch(MOVIES_POPULAR_URL, API_OPTIONS);
    const json = await data.json()
    dispath(addPopularMovies(json.results));
  }

  useEffect( ()=> {
    fetchPopularMovies()
  }, [])
}

export default useFetchPopularMovies;