import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/secret";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { MOVIES_NOW_PLAYING_URL } from "../utils/constants";

const useFetchNowPlayingMovies = () => {
  const dispath = useDispatch();

  const fetchNowPlayingMovies = async () => {
    const data = await fetch(MOVIES_NOW_PLAYING_URL, API_OPTIONS);
    const json = await data.json()
    dispath(addNowPlayingMovies(json.results));
  }

  useEffect( ()=> {
    fetchNowPlayingMovies()
  }, [])
}

export default useFetchNowPlayingMovies;