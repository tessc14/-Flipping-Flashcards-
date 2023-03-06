import React from 'react'
import './style.css'

function Flashcard(key, flash_id, user_id, question, answer, category ) {
  return (
    <div className="flashcard">
      <h1>{question}</h1>
      <h2>{answer}</h2>
    </div>
  )
}

export default Flashcard