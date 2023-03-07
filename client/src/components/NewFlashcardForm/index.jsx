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
    <div>
        <form action="submit">
            <label htmlFor="category">Choose a category:</label>
            <select id="category" name="category">
                <option value="History">History</option>
                <option value="Geography">Geography</option>
            </select>
            <label htmlFor="question">Question</label>
            <input type="text" value={question} id="question" onChange={handleQuestion}/>
            <label htmlFor="answer">Answer</label>
            <input type="text" value={answer} id="answer" onChange={handleAnswer}/>
            <button onClick={handleSubmit}>Add flashcard</button>
        </form>
    </div>
  )
}

export default NewFlashcardForm