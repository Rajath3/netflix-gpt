import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/secret";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { TRAILER_URL } from "../utils/constants";

const useMovieTrailer = (videoId) => {
    const dispath = useDispatch();

    const getTrailerMovie = async () => {
        const trailer_url = TRAILER_URL + videoId + '/videos';
        const data = await fetch(trailer_url, API_OPTIONS)
        const json = await data.json()
        
        const trailers = json.results.filter((video)=> video.type === 'Trailer')
        const trailer = trailers.length ? trailers[0] : json.results[0]
    
        dispath(addTrailerVideo(trailer));
      }
      
      useEffect(()=> {
        getTrailerMovie()
      }, [])
    
}

export default useMovieTrailer;