import React, { useState } from "react";
import "./style.css";

function NewFlashcardForm({
  question,
  answer,
  setQuestion,
  setAnswer,
  category,
  setCategory,
}) {
  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function handleQuestion(e) {
    setQuestion(e.target.value);
  }

  function handleAnswer(e) {
    setAnswer(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (question.length > 0 && answer.length > 0) {
      fetch("http://localhost:3000/api/flashcards", {
        method: "POST",
        body: JSON.stringify({
          question: question,
          answer: answer,
          category_name: category,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          handleMessage();
          // setTimeout(() => {
          //     setMessage('')
          // }, 5000)
        })
        .catch((err) => {
          console.log(err.message);
          alert("There was a problem in creating your flashcard.");
          // setTimeout(() => {
          //     setMessage('')
          // }, 5000)
        });
    }
    console.log(question, answer);
    setAnswer("");
    setQuestion("");
  }

  const [message, setMessage] = useState(false);

  function handleMessage() {
    setMessage(!message);

    setTimeout(() => {
      setMessage(false);
    }, 2000);
  }

  return (
    <div className="add-container">
      <form id="addFlashcard" action="submit">
        <div className="form-section">
          <label htmlFor="category">Category</label>
          <br />
          <select id="category" name="category" onChange={handleCategory}>
            <option value="History">History</option>
            <option value="Geography">Geography</option>
            <option value="Math">Math</option>
            <option value="Language">Language</option>
            <option value="Art">Art</option>
          </select>
        </div>
        <div className="form-section">
          <label htmlFor="question">Question</label>
          <br />
          <input
            type="text"
            value={question}
            id="question"
            onChange={handleQuestion}
          />
        </div>
        <div className="form-section">
          <label htmlFor="answer">Answer</label>
          <br />
          <input
            type="text"
            value={answer}
            id="answer"
            onChange={handleAnswer}
          />
        </div>
        <button onClick={handleSubmit}>Add flashcard</button>
      </form>
      {message && (
        <p className="message">
          Flashcard <br></br>added!
        </p>
      )}
    </div>
  );
}

export default NewFlashcardForm;
