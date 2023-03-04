import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Welcome</h1>
      <h2>Learn faster with our interactive flashcards!</h2>
      <Link to='/flashcards'>Flashcards</Link>
      <Link to='/add'>Add</Link>
      <Link to='/login'></Link>
      <Link to='/categories'>Categories</Link>
    </>
  )
}

export default Home
