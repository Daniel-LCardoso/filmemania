import React from "react";
import { useEffect,useState} from "react";
import { useSearchParams } from "react-router-dom";
import MoviesCard from "../components/MoviesCard";

const searchUrl = import.meta.env.VITE_SEARCH
const apikey = import.meta.env.VITE_API_KEY

import './MovieGrid.css'

const Search = () => {
    
    const [searchParams] = useSearchParams()
    const [movies,setMovies] = useState([])
    const query = searchParams.get('q')

    const getsearchedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
      }
     
      useEffect(()=>{
        const serachwithQueryUrl = `${searchUrl}?${apikey}&query=${query}`
        getsearchedMovies(serachwithQueryUrl)
      }, [query])
     
 return (
    <div className="container">
 <h2 className="title">Resultados para <span className="query_text">{query}</span></h2>
 <div className="movies_container">
  
  {movies && movies.map((movie)=>
<MoviesCard key={movie.id} movie={movie}/>)}
 </div>
</div>)
};

export default Search