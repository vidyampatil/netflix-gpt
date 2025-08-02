import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
const Browse = () =>{
   useNowPlayingMovies();
   useUpcomingMovies();
   useTopRatedMovies();
   usePopularMovies();
    return(
        <>
         <Header/>
         <MainContainer/>
         <SecondContainer/>
        </>
    )
}

export default Browse;