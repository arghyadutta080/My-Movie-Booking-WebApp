import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MovieContext } from '../../context/movie/movieContext'


const MovieDetails = () => {

    const { id } = useParams();
    console.log(id);

    const context = useContext(MovieContext);
    console.log(context);
    console.log(context.state)

    context.state.map((movie) => { console.log(movie.show.id) })

    const movie = context.state.find((movie) => {
        return (movie.show.id == id)
    });  
    console.log("selected movie data is ", movie)

    return ( 
        <>
            Hello from MovieDetails - {id}
            <div className="w-auto m-4 rounded-1">
                <div className="card shadow-sm">
                    <img src={movie.show.image === null ? "" : movie.show.image.original} alt="No preview available" height="350" width="280" className='rounded-top' />
                    <div className='bg-dark text-light fw-normal p-1 rounded-bottom d-flex align-items-center border-top-1 border-light'>
                        {movie.show.rating.average !== null ? movie.show.rating.average : "Not rated yet"}
                    </div>
                </div>
                <div className='py-4 px-2'>
                    <div className='fw-bold fs-4 '>{movie.show.name}</div>
                    <div className='text-secondary'>{movie.show.type}</div>
                    <div className='text-secondary'>Language: {movie.show.language}</div>
                </div>
            </div>
        </>
    )
}

export default MovieDetails
