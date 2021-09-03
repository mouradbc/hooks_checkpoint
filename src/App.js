import React,{useState} from 'react'
import './App.css';
import MovieList from './Component/MovieList';
import movies from './moviesData'
import SearchBar from './Component/SearchBar'
import AddMovie from './Component/AddMovie'

function App() {
  const [movieList,setMovieList]=useState(movies)
  const [searchInput, setsearchInput] = useState({searchInput:"",searchRate:0})

 
  const getInput = (data) => {
    setMovieList([...movieList,data])
  }
  const getSearchInput = (searchData) => {
    console.log(searchData)
  }
  const getSearchRate = (searchRate) => {
    console.log(searchRate)
  }
  
 
  return (
    <div className="App">
      
     <div className="movieList">
     <AddMovie getInput={getInput}/>
     
     <SearchBar getSearchInput={getSearchInput} getSearchRate={getSearchRate} />
      <MovieList 
      searchInput={searchInput}
      movies={movieList}
      />
     </div>
    </div>
  );
}

export default App;
