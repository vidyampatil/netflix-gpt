import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addTopRatedMovies} from '../utils/movieSlice';
import { useEffect } from "react";

const useTopRatedMovies = async() =>{
   const dispatch = useDispatch();

   const getTopRatedMovies = async () =>{
   const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
   const json = await data.json();
   dispatch(addTopRatedMovies(json.results))
   }

   useEffect(()=>{
    getTopRatedMovies();
   },[])
}

export default useTopRatedMovies;