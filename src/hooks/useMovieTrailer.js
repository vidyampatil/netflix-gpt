import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
       const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();
        const trailer = json.results.find(video => video.type === "Trailer" && video.site === "YouTube");
        dispatch(addTrailerVideo(trailer));
        dispatch(addTrailerVideo(trailer))
    }

   useEffect(() => {
    if (movieId) getMovieVideos();
  }, [movieId]);
}

export default useMovieTrailer;