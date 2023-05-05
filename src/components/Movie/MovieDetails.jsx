import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MovieContext } from '../../context/movie/movieContext'
import { BsStarFill } from 'react-icons/bs'


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
        <div>
            <div className='bg-dark' >
                <div className='text-center py-3 fst-italic fw-bold fs-3 text-danger mb-4' style={{ backgroundColor: "#060235" }} >Book-My-Movie</div>

                <div className="container d-flex flex-wrap py-2 align-items-center">

                    <div className="d-flex flex-column justify-content-center py-4">
                        <img src={movie.show.image === null ? "" : movie.show.image.original} alt="No preview available" className='img-fluid rounded-top rounded-bottom pb-4' height="350" width="280" />
                    </div>

                    <div className='d-flex flex-column justify-content-between px-4'>

                        <div className='d-flex pb-4'>
                            <div className='fw-bold fs-1 text-white'>{movie.show.name}</div>
                            <div className='bg-transparent text-dark fw-bold fs-3 p-1 px-4 rounded-bottom d-flex align-items-center border-top-1 text-white'>
                                <BsStarFill className='mx-2' color='orange' size={30} />
                                {movie.show.rating.average !== null ? `${movie.show.rating.average}/10` : "Not rated yet"}
                            </div>
                        </div>

                        <button type="button" class="btn btn-danger btn-lg px-3 fw-bold fs-3 mt-4" width="70%">Book Now</button>

                        <div className="d-flex fw-bold my-4">
                            <div className='text-white px-1'> {movie.show.type}</div>
                            <div className='text-white'> | {
                                movie.show.genres.map((genre) => {
                                    return (<span className='me-2'>{genre}</span>)
                                })}
                            </div>
                            <div className='text-white px-1'> | {movie.show.premiered}</div>
                            <div className='text-white px-1'> | {movie.show.schedule.days.map((day) => { return (<span className='text-white me-2'>{day}</span>) })} </div>
                            <div className='text-white px-1'> | {movie.show.schedule.time}</div>
                            <div className='text-white px-1'> | {movie.show.runtime} min</div>
                        </div>

                        <div className='d-flex'>
                            <span className="text-white bg-secondary px-3 mx-2 py-1 fw-bold rounded">{movie.show.language}</span>
                            {
                                movie.show.network === null ? "" : <span className="text-white bg-secondary px-3 mx-2 py-1 fw-bold rounded">{movie.show.network.country.name}</span>
                            }
                            {
                                movie.show.network === null ? "" : <span className="text-white bg-secondary px-3 mx-2 py-1 fw-bold rounded">{movie.show.network.country.timezone}</span>
                            }


                        </div>
                    </div>

                </div>
            </div>
            <div className='container my-4'>
                <div className='fw-bold fs-3 mt-2'>Movie Summary</div>
                <div className='fs-5'>{movie.show.summary.replace(/(<([^>]+)>)/ig, "")}</div>
            </div>
        </div>
    )
}

export default MovieDetails