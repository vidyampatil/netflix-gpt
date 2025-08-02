import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () =>{
    const dispatch = useDispatch();
   const PopularMovies = async() =>{
     const popularmovies = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
     const json = await popularmovies.json();
     dispatch(addPopularMovies(json.results))
   }

   useEffect(()=>{
    PopularMovies();
   },[])
}

export default usePopularMovies;