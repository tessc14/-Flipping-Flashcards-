import React, {useEffect, useState} from 'react'
import {Flashcard} from '../../components'
import './style.css'

function FlashcardGallery() {

  const [flashcards, setFlashcards] = useState([])

  async function loadFlashcards() {
      const response = await fetch("http://localhost:3000/api/flashcards");
      const data = await response.json();
      setFlashcards(data);
      console.log(data)
  };

  useEffect(() => {
    loadFlashcards();
  }, [])

  function displayFlashcards() {
      return flashcards.map((f) => <Flashcard key={f.id} question={f.question} answer={f.answer} />)
  }

  return (
    <div className="flashcard-container">
        {displayFlashcards()}
    </div>
  )
}

export default FlashcardGallery
