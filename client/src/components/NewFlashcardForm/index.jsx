import React from 'react'

function NewFlashcardForm() {
  return (
    <div>
        <form action="submit">
            <label for="category">Choose a category:</label>
            <select id="category" name="category">
                <option value="History">History</option>
                <option value="Geography">Geography</option>
            </select>
            <label htmlFor="question">Question</label>
            <input type="text" value="Question" id="question"/>
            <label htmlFor="answer">Answer</label>
            <input type="text" value="Answer" id="answer" />
            <input type="submit" />
        </form>
    </div>
  )
}

export default NewFlashcardForm