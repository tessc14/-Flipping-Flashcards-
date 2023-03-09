import React, {useState} from 'react'
import './style.css'

function Flashcard({ question, answer, deleteFlashcard, id } ) {
    const [flipped, setFlipped] = useState(false)

    function handleClick(e) {
      e.preventDefault()
      if (e.target.className === 'deleteBtn') {
        return
      }
    
      setFlipped(!flipped)
    }

    function handleDelete(e) {
      e.preventDefault()
      deleteFlashcard(id)
    }
  

  return (
    <div 
      className={`card ${flipped ? 'flipped' : ''}`} 
      onClick={handleClick}
    >
      <div className='front'>
        
        <h2>
          {question}
        </h2>
        <button className="deleteBtn" onClick={handleDelete}>X</button>
      </div>
      <div className='back'>
        <h2>
          {answer}
        </h2>
      </div>
      
    </div>
  )
}

export default Flashcard
