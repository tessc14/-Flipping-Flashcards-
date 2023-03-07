import React from 'react'
import './style.css'

function NewFlashcardForm({question, answer, setQuestion, setAnswer}) {


    function handleQuestion(e) {
        setQuestion(e.target.value)
    }

    function handleAnswer(e) {
        setAnswer(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(question, answer)
        setAnswer('')
        setQuestion('')
    }

  return (
    <div className="form">
        <form action="submit">
            <div className="form-section">
               <label htmlFor="category">Choose a category:</label>
                <select id="category" name="category">
                    <option value="History">History</option>
                    <option value="Geography">Geography</option>
                </select> 
            </div>
            <div className="form-section">
                <label htmlFor="question">Question</label>
                <input type="text" value={question} id="question" onChange={handleQuestion}/>  
            </div>
            <div className="form-section">
               <label htmlFor="answer">Answer</label>
                <input type="text" value={answer} id="answer" onChange={handleAnswer}/> 
            </div>
            <button onClick={handleSubmit}>Add flashcard</button>
        </form>
    </div>
  )
}

export default NewFlashcardForm