import React, { useState } from 'react'
import { NewFlashcardForm } from '../../components'

const AddFlashcard = () => {
  const [questionInput, setQuestionInput] = useState('')
  const [answerInput, setAnswerInput] = useState('')


  return (
    <div>
      <h1>Add a new flashcard:</h1>
      <div>
        <NewFlashcardForm question={questionInput} setQuestion={setQuestionInput} answer={answerInput} setAnswer={setAnswerInput}/>
      </div>
    </div>
  )
}

export default AddFlashcard
