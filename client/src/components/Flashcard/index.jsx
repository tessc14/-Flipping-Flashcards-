import React, {useState} from 'react'
import './style.css'

function Flashcard({ question, answer} ) {
    const [flipped, setFlipped] = useState(false)

    function handleClick(e) {
      e.preventDefault()
      setFlipped(!flipped)
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