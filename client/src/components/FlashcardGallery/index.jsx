import React, {useEffect, useState} from 'react'
import {Flashcard} from '../../components'
import './style.css'

function FlashcardGallery() {

  const [flashcards, setFlashcards] = useState()

  useEffect(() => {
    async function loadFlashcards() {
        const response = await fetch("http://localhost:3000/flashcards");
        const data = await response.json();
        setFlashcards(data);
        console.log(flashcards)
    };
    
    loadFlashcards();
  }, [])

  // function displayFlashcards() {
  //     return flashcards.map(f => <Flashcard key={f.id} flash_id={f.flashcard_id} user_id={f.user_id} question={f.question} answer={f.answer} category={f.category} />)
  // }

  return (
    <div className="flashcard-container">
      <Flashcard />
        {/* {displayFlashcards()} */}
    </div>
  )
}

export default FlashcardGallery