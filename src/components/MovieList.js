import { MovieCard } from './MovieCard'

export const MovieList = ({ title, movies }) => {
    return (
        <div className='px-6'>
            <h1 className='text-3xl font-bold py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {Array.isArray(movies) && movies.map((movie) => (
                        <MovieCard posterPath={movie.poster_path} key={movie.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
