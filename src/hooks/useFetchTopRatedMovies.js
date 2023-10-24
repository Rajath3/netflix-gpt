import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/secret";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { MOVIES_TOP_RATEED_URL } from "../utils/constants";

const useFetchTopRatedMovies = () => {
  const dispath = useDispatch();

  const fetchTopRatedMovies = async () => {
    const data = await fetch(MOVIES_TOP_RATEED_URL, API_OPTIONS);
    const json = await data.json()
    dispath(addTopRatedMovies(json.results));
  }

  useEffect( ()=> {
    fetchTopRatedMovies()
  }, [])
}

export default useFetchTopRatedMovies;