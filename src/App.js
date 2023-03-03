import React from "react";
import { useState,useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

//d069f102

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=d069f102';

const movie1 = {
    "Title": "The Amazing Spiderman 2 Webb Cut",
    "Year": "2021",
    "imdbID": "tt18351128",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
}

const App = () => {
    
    const [movies,Setmovies] = useState([]);
    const [search, Setsearch] = useState('');
    
    const searchmovies = async(title)=> {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        Setmovies(data.Search)
    }

    useEffect(() => {
        searchmovies('Spiderman')
    },[])
    return(
       <div className="app">
        <h1> Movie Hub</h1>

        <div className="search">
            <input 
                placeholder="Search for movies"
                value={search}
                onChange= { (e) => Setsearch(e.target.value)}
                />
            <img 
                src={SearchIcon}
                alt='search'
                onClick={()=>searchmovies(search)}
            />
        </div>
        {
            movies?.length>0
            ? <div className="container">
            {
                movies.map((movie)=>(
                    <MovieCard movie={movie} />
                ))
            }
            </div>
            : <div className="empty">
                <h3> No movies found</h3>
                </div>

        }
        
       </div>
    );
}

export default App;