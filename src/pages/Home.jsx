import React from "react";
import { useState,useEffect } from "react";
import Movie from "./Movie";
import MoviesCard from "../components/MoviesCard";


import './MovieGrid.css'

const Home = () => {
    const [topMovies,setTopMovies] = useState([])
    const moviesUrl = import.meta.env.VITE_API
    const apiKey = import.meta.env.VITE_API_KEY
   
    const getMovies = async (url) => {
      const res = await fetch(url)
      const data = await res.json()
      setTopMovies(data.results)
    }
   
    useEffect(()=>{
      const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`
      getMovies(topRatedUrl)
    }, [])

    

    console.log(topMovies)

 return (
 <div className="container">
     <h2 className="title">Top Ranqueados</h2>
     <div className="movies_container">
      {topMovies.length === 0 && <h2>Carregando...</h2> }
      {topMovies.length >0 && topMovies.map((movie)=>
  <MoviesCard key={movie.id} movie={movie}/>)}
     </div>
 </div>
  )
};

export default Home