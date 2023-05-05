import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const MovieItems = ({ info }) => {
    return (
        <>
            <Link to={`/movie/${info.show.id}`} className='text-decoration-none'>
                <div className="w-auto m-4 rounded-1">
                    <div className="card shadow-sm">
                        <img src={info.show.image === null ? "" : info.show.image.original} alt="No preview available" height="350" width="280" className='rounded-top' />
                        <div className='bg-dark text-light fw-normal p-1 rounded-bottom d-flex align-items-center border-top-1 border-light'>
                            <BsStarFill className='mx-2' color='green' />
                            {info.show.rating.average !== null ? info.show.rating.average : "Not rated yet"}
                        </div>
                    </div>
                    <div className='py-4 px-2'>
                        <div className='fw-bold fs-4 '>{info.show.name}</div>
                        <div className='text-secondary'>{info.show.type}</div>
                        <div className='text-secondary'>Language: {info.show.language}</div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default MovieItems