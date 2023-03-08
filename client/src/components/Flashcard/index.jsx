import React, {useState} from 'react'
import './style.css'

function Flashcard({ id, question, answer, deleteFlashcard} ) {
    const [flipped, setFlipped] = useState(false)
    const [favourite, setFavourite] = useState(false)
    

    function handleClick(e) {
      e.preventDefault()
      if (e.target.className === 'deleteBtn' || 'favouriteBtn') {
        return
      }
    
      setFlipped(!flipped)
    }

    function handleDelete(e) {
      e.preventDefault()
      deleteFlashcard(id)
    }

  
    function handleFavourite(e) {
      setFavourite(!favourite)
      
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
        {
          !favourite ? <button className="favouriteBtn" onClick={handleFavourite}> &#9825;</button> : <button onClick={handleFavourite}>&hearts;</button>
        }
        
        
        
      </div>
      <div className='back'>
        <h2>
          {answer}
        </h2>
      </div>
      {/* &hearts; */}
    </div>
  )
}

export default Flashcard