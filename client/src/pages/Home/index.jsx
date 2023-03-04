import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h2>Welcome</h2>
      <h3>Learn faster with our interactive flashcards!</h3>
      <h4><Link to='/flashcards' className='home-links'>Start Flipping Flashcards</Link></h4>
      <h4><Link to='/add' className='home-links'>Add a new flashcard</Link></h4>
      <h4><Link to='/categories' className='home-links'>Categories</Link></h4>
      {/* <Link to='/login'>Login</Link> */}
    </>
  )
}

export default Home
