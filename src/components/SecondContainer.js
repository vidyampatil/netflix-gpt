import { MovieList } from './MovieList'
import { useSelector } from 'react-redux'

function SecondContainer() {
    const movies = useSelector(store => store.movies)
    return (
        <div className='bg-gray-800'>
            <div className='-mt-52 relative z-20'>
                <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
                <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
                <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
            </div>
        </div>
    )
}

export default SecondContainer