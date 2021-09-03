import React,{useState,useEffect} from "react";
import "./searchBar.css";
import ReactStars from "react-rating-stars-component";
const SearchBar = ({getSearchInput}) => {
  const [searchInput, setsearchInput] = useState({searchInput:""})
  const handleSearch = (e) => {
    setsearchInput({...searchInput,[e.target.name]:e.target.value})
    getSearchInput({...searchInput,searchRate})
  }
  useEffect(() => {
    getSearchInput({...searchInput,searchRate})
    }
  ,)
  
  const [searchRate, setsearchRate] = useState(0)


  return (
    <div>
      <ReactStars
      value={searchRate}
    count={5}
    onChange={(value)=>setsearchRate(value)}
    size={24}
    activeColor="#ffd700"
  />
     
      <input className="search-input"name="search" type="text"onChange={handleSearch}/>
    </div>
  );
};

export default SearchBar;
