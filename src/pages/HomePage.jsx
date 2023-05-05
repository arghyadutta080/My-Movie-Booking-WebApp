import React from 'react'
import MovieList from '../components/Home/MovieList'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='bg-dark'>    
        <MovieList />   
    </div>
  )
}

export default HomePage
