import React, { useState, useEffect, useContext } from 'react'
import { MovieContext } from '../../context/movie/movieContext'
import MovieItems from './MovieItems'
import axios from 'axios';

const MovieList = () => {

    const context = useContext(MovieContext);
    const movieData = context.state
    console.log("movieData in MovieList is", movieData) 

 
    return (  
        <div className="album py-5 bg-light">
            <h1 className='text-center pb-4 fst-italic fw-bold'>Book-My-Movie</h1>
            <div className="container-fluid">

                <div className="d-flex align-items-center justify-content-center flex-wrap">
                    {
                        movieData == null ? null : movieData.map((data) => {
                            return <MovieItems info={data} key={data.score} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList