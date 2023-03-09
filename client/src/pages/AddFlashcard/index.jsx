import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NewFlashcardForm } from '../../components'
import { useAuth } from "../../contexts";



const AddFlashcard = () => {
  const [questionInput, setQuestionInput] = useState('')
  const [answerInput, setAnswerInput] = useState('')
  const [category, setCategory] = useState('History')
  const navigate = useNavigate()
  const { user } = useAuth();
  
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div>
      <h1 id='addH1'>Add a new flashcard:</h1>
      <div>
        <NewFlashcardForm question={questionInput} setQuestion={setQuestionInput} answer={answerInput} setAnswer={setAnswerInput} category={category} setCategory={setCategory}/>
      </div>
    </div>
  )
}

export default AddFlashcard
