import React,{useState,useEffect} from 'react'
import './movieList.css'
import MovieCard from './MovieCard'

const MovieList = ({movies,searchInput}) => {
    const [searchedMovie, setSearchedMovie] = useState(movies)
    //useEffect( () => {
    //    setSearchedMovie(
    //    movies.filter(
    //    (movie) => 
    //    movie.title.toLowerCase().includes(searchInput.searchInput)
    //    && movie.rate === searchInput.searchRate))}
        
    //, [searchInput])
    

    return (
        <>
        <div className="movieList">
            {searchedMovie.map((movie)=>(<MovieCard key={movie.id}movie={movie}/>))}
        </div>
        </>
    )
    }

export default MovieList;
