import React from 'react'
import { Link } from 'react-router-dom'
import FlashcardGalleryByCategory from '../../components/FlashcardGalleryByCategory'

const SetCategory = () => {
  return (
    <>
      <Link to="/flashcards/categories/history"><h3>History</h3></Link>
      <Link to="/flashcards/categories/geography"><h3>Geography</h3></Link>
    </>
  )
}

export default SetCategory
