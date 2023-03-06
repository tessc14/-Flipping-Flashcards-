import React from 'react'
import './style.css'

function Flashcard({ question, answer} ) {
  return (
    <div className="flashcard">
      <h1>{question}</h1>
      <h2>{answer}</h2>
    </div>
  )
}

export default Flashcard