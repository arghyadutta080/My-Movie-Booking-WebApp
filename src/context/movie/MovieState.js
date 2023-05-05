import React, { useState, useEffect } from 'react'
import { MovieContext } from './movieContext'
import axios from "axios";

const MovieState = (props) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get("https://api.tvmaze.com/search/shows?q=all").then((response) => {
            const movies = response.data;
            console.log("Movies", movies)
            // state != [] ? setState(movies) : console.log("State is not empty")
            setState(movies)
            console.log("Movie data is", response.data)
            console.log("Context data is", state); 
        });
    }, []);
    return (
        <MovieContext.Provider value={{state}}> 
            {props.children}
        </MovieContext.Provider>
    ) 
}

export default MovieState