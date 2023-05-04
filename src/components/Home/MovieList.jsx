import React, { useState, useEffect } from 'react'
import MovieItems from './MovieItems'
import axios from 'axios';

const MovieList = () => {

    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        axios.get("https://api.tvmaze.com/search/shows?q=all").then((response) => {
            setMovieData(response.data)
            // console.log(movieData);
        });
    }, []);

    return (
        <div className="album py-5 bg-light">
            <h1 className='text-center pb-4 fst-italic fw-bold'>Book-My-Movie</h1>
            <div className="container-fluid">

                <div className="d-flex align-items-center justify-content-center flex-wrap">
                    {
                        // console.log(movieData)
                        movieData == null ? null : movieData.map((data) => {
                            return <MovieItems info={data} key={data.score} />
                            // console.log(data)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList
