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
      

      {/* {!flipped ? (<h1 className="front">{question}</h1>) : (<h1 className="back"> {answer} </h1>)}
       */}
    </div>
  )
}

export default Flashcard