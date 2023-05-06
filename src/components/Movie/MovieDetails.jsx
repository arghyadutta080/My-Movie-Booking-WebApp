import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MovieContext } from '../../context/movie/movieContext'
import { BsStarFill } from 'react-icons/bs'


const MovieDetails = () => {

    const { id } = useParams();
    // console.log(id);

    const context = useContext(MovieContext);
    // console.log(context);
    // console.log(context.state)

    // context.state.map((movie) => { console.log(movie.show.id) })

    const movie = context.state.find((movie) => {
        return (movie.show.id == id)
    });
    // console.log("selected movie data is ", movie)

    const option = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const payment = ["Credit Card", "Debit Card", "UPI", "Net Banking"]

    const [selectOption, setSelectOption] = useState(1)
    const [selectPayment, setSelectPayment] = useState(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    // console.log("selected option is ", selectOption)

    function handleSubmit(event) {
        event.preventDefault();
        console.log(selectOption, selectPayment, name, email)
        const obj = {
            name: name,
            email: email,
            ticket_count: selectOption,
            payment_method: selectPayment
        }
        localStorage.setItem('formData', JSON.stringify(obj));
        alert("Your ticket has been booked successfully")
    }

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

                        <button type="button" class="btn btn-danger btn-lg px-3 fw-bold fs-3 mt-4" width="70%" data-bs-toggle="modal" data-bs-target="#bookMovie">Book Now</button>
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="bookMovie" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Booking Summary</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className='d-flex align-items-center justify-content-evenly'>
                                                <div className='d-flex flex-column'><img className="" src={movie.show.image === null ? "" : movie.show.image.original} alt="" width="180" height="250" /></div>
                                                
                                                <div className='d-flex flex-column'>
                                                    <div className='fw-bold fs-2 text-dark mb-2'>{movie.show.name}</div>

                                                    <input type="text" width="90%" className=" px-2 py-1 mb-2 border border-dark" id="name" name="name" placeholder="Your name" value={name} onChange={(e) => { setName(e.target.value) }} />
                                                    <input type="email" width="90%" className=" px-2 py-1 mb-2 border border-dark" id="email" name='email' placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />

                                                    <select class="form-select" width="90%" className='p-1 mb-2 border border-dark' name='ticket_count' aria-label="Default select example" value={selectOption} onChange={(e) => { setSelectOption(e.target.value) }}>
                                                        <option selected >Number of tickets</option>
                                                        {
                                                            option.map((opt) => {
                                                                return (<option value={opt}>{opt} tickets</option>)
                                                            })
                                                        }
                                                    </select>

                                                    <select class="form-select" width="90%" className='p-1 mb-2 border border-dark' name='payment_mode' aria-label="Default select example" value={selectPayment} onChange={(e) => { setSelectPayment(e.target.value) }}>
                                                        <option selected >Payment mode</option>
                                                        {
                                                            payment.map((opt) => {
                                                                return (<option value={opt}>{opt}</option>)
                                                            })
                                                        }
                                                    </select>
                                                    

                                                    <div className="mt-2 mb-3 d-flex flex-row align-items-center justify-content-center">
                                                        <button className="w-100 btn btn-md btn-primary" type="submit">Place Order</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-wrap fw-bold my-4">
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