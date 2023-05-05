import React, { useState, useEffect, useContext } from 'react'
import { MovieContext } from '../../context/movie/movieContext'
import MovieItems from './MovieItems'
import axios from 'axios';

const MovieList = () => {

    const context = useContext(MovieContext);
    const movieData = context.state
    console.log("movieData in MovieList is", movieData) 
 
    return (  
        <div className="album pb-5 bg-dark">
            <div className='text-center py-3 fst-italic fw-bold fs-3 text-danger mb-4' style={{ backgroundColor: "#020946" }} >Book-My-Movie</div>
            <div className="container-fluid">

                <div className="d-flex align-items-center justify-content-center flex-wrap mt-4 pt-4">
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